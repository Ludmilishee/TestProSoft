var app = app || {};

mocha.setup('bdd');

let assert = chai.assert;

let appViewTest = new app.AppView();
let cons = new app.Consumer({ id: 7, name: 'Test', type: 1, phone: '1112223334455' });

describe("Представление appView", function() {
    it("Метод initialize() должен заполнять коллекцию 6 элементами", function() {
        assert.equal(app.consumersOrigin.length, 6);
    });

    it("Метод filterCol() должен отображать коллекцию, отфильтрованную по полю Ф", function() {
        $('.filter').val('1');
        appViewTest.filterCol();
        app.consumers.map(function (cons) {
            assert.equal(cons.get('type'), 1);
        })
    });

    it("Метод filterCol() должен отображать коллекцию, отфильтрованную по полю Ю", function() {
        $('.filter').val('2');
        appViewTest.filterCol();
        app.consumers.map(function (cons) {
            assert.equal(cons.get('type'), 2);
        })
    });

    it("Метод resetCol() должен отображать начальную коллекцию", function() {
        appViewTest.resetCol();
        assert.equal(app.consumers.length, app.consumers.superset().length);
    });

    it("Метод showPopup() должен отображать всплывающее окно", function() {
        appViewTest.showPopup();
        assert.equal($('.content').find('.modal').length, 1);
        app.popupView.hidePopup();
    });

    it("Метод initCollection() должен отображать таблицу", function() {
        app.tableView.remove();
        appViewTest.initCollection();
        assert.equal($('#consumerTable').find('tbody').length, 1);
    });
});

describe("Представление tableView", function() {
    it("Метод renderOne() должен отображать новую строку таблицы", function() {
        app.tableView.renderOne(cons);
        let row = $('#consumerTable tbody tr').last().children();
        assert.equal(row.eq(0).text(), cons.get('name'));
        assert.equal(row.eq(1).text(), app.consumerType[1]);
        assert.equal(row.eq(2).text(), cons.get('phone'));
        app.consumers.superset().remove(cons);
    });

    it("Метод render() должен отображать все строки таблицы", function() {
        app.tableView.remove();
        appViewTest.initCollection();
        assert.equal(app.tableView.el.childNodes.length, app.consumers.length);
    });
});

describe("Представление rowView", function() {
    it("Метод showPopup() должен отображать всплывающее окно", function() {
        let row = new app.RowView({ model: cons });
        app.tableView.$el.append(row.render().$el);
        row.showPopup();
        assert.equal($('#consumerTable').find('.modal').length, 1);
        row.remove();
    });

    it("Метод showPopup() должен отображать данные строки", function() {
        let row = new app.RowView({ model: cons });
        app.tableView.$el.append(row.render().$el);
        row.showPopup();
        assert.equal($('#name').val(), row.model.get('name'));
        assert.equal(parseInt($('#type').val()), row.model.get('type'));
        assert.equal($('#phone').val(), row.model.get('phone'));
        row.remove();
    });

    it("Метод deleteRow() должен удалять строку", function() {
        let initLength = app.tableView.el.childNodes.length;
        let row = new app.RowView({ model: cons });
        app.tableView.$el.append(row.render().$el);
        row.deleteRow();
        assert.equal(app.tableView.el.childNodes.length, initLength);
    });
});

describe("Представление popupView", function() {
    it("Метод hidePopup() должен удалять всплывающее окно", function() {
        appViewTest.showPopup();
        app.popupView.hidePopup();
        assert.equal($('.content').find('.modal').length, 0);
    });

    it("Метод addConsumer() должен добавлять в коллекцию новую модель", function() {
        appViewTest.showPopup();
        $('#name').val(cons.get('name'));
        $('#type').val(cons.get('type'));
        $('#phone').val(cons.get('phone'));
        let initialLength = app.consumers.superset().length;
        app.popupView.addConsumer();
        assert.equal(app.consumers.superset().length, initialLength + 1);
        app.consumers.superset().pop();
        app.tableView.remove();
        appViewTest.initCollection();
    });

    it("Метод addConsumer() должен отображать новую модель", function() {
        appViewTest.showPopup();
        $('#name').val(cons.get('name'));
        $('#type').val(cons.get('type'));
        $('#phone').val(cons.get('phone'));
        app.popupView.addConsumer();
        let row = $('#consumerTable tbody tr').last().children();
        assert.equal(row.eq(0).text(), cons.get('name'));
        assert.equal(row.eq(1).text(), app.consumerType[cons.get('type')]);
        assert.equal(row.eq(2).text(), cons.get('phone'));
        console.log(app.consumers.superset());
        app.consumers.superset().pop();
        app.tableView.remove();
        appViewTest.initCollection();
        console.log(app.consumers.superset());
    });

    it("Метод addConsumer() должен добавлять модель в коллекцию", function() {
        let initLength = app.consumers.superset().length;
        appViewTest.showPopup();
        $('#name').val(cons.get('name'));
        $('#type').val(cons.get('type'));
        $('#phone').val(cons.get('phone'));
        app.popupView.addConsumer();
        assert.equal(app.consumers.superset().length, initLength + 1);
        app.consumers.superset().pop();
        app.tableView.remove();
        appViewTest.initCollection();
    });
});