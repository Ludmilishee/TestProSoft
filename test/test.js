var app = app || {};

mocha.setup('bdd');

var assert = chai.assert;

var appViewTest = new app.AppView();

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

describe("Представление appView", function() {
    it("Метод render() должен отображать все строки таблицы", function() {
        app.tableView.remove();
        app.tableView = new app.TableView({ collection: app.consumers });
        app.tableView.render();
    });

    it("Метод renderOne() должен отображать новую строку таблицы", function() {
        let cons = new app.Consumer({ id: 100, name: 'Test', type: 1, phone: '1112223334455' });
        app.tableView.renderOne(cons);
        let row = $('#consumerTable tbody tr').last().children();
        assert.equal(row.eq(0).text(), 'Test');
        assert.equal(row.eq(1).text(), app.consumerType[1]);
        assert.equal(row.eq(2).text(), '1112223334455');
        app.tableView.el.childNodes[app.tableView.el.childNodes.length - 1].remove();
    });
});
