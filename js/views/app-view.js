/* global Backbone, jQuery, _ */
// TODO: Семантическая вёрстка, LocaleStorage (?)
// TODO: Добавить анимацию попапа, hover на кнопки, Двусторонняя привязка
var app = app || {};

let consumerType = {
    1: 'Ф',
    2: 'Ю'
};

let typeTitle = {
    1: 'Физическое лицо',
    2: 'Юридическое лицо'
};

var view;

(function ($) {

    app.AppView = Backbone.View.extend({
        el: '.content',

        template: _.template($('#consumerTable').html()),

        events: {
            "click .add": "showPopup",
            "change .filter": "filterCol",
            "click .reset": "resetCol"
        },

        initialize: function() {
            this.listenTo(app.consumersOrigin, 'sync', this.initCollection);

            app.consumersOrigin.fetch({
                success: function(data) {
                    app.counter.idInd = data["models"][data.length - 1].get('id');
                    app.consumers = new FilteredCollection(app.consumersOrigin);
                },
                error: function() {
                    alert('There was some error in loading and processing the JSON file');
                }
            });
        },

        filterCol: function () {
            let value = Number($('.filter').val());
            if (value !== 0) {
                app.consumers.filterBy('type', { type: value });
                app.tableView.remove();
                this.initCollection();
            }
        },

        resetCol: function () {
            app.consumers.resetFilters();
            app.tableView.remove();
            this.initCollection();
        },

        showPopup: function () {
            view = new app.PopupView();
            this.$el.append(view.render().el);
        },

        initCollection: function () {
            app.tableView = new app.TableView({ collection: app.consumers });
            $('#consumerTable').append(app.tableView.render().$el);
        }
    });
})(jQuery);
