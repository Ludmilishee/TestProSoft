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
            "click .add": "showPopup"
        },

        initialize: function() {
            this.listenTo(app.consumers, 'sync', this.initCollection);



            app.consumers.fetch({
                success: function(data) {
                    app.counter.idInd = data["models"][data.length - 1].get('id');
                },
                error: function(){
                    alert('There was some error in loading and processing the JSON file');
                }
            });
        },

        render: function() {
            return this;
        },

        showPopup: function () {
            view = new app.PopupView();
            this.$el.append(view.render().el);
        },

        initCollection: function () {
            $('#consumerTable').append(app.Grid.render().el);
        }
    });
})(jQuery);
