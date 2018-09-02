/* global Backbone, jQuery, _ */
// TODO: Семантическая вёрстка, LocaleStorage (?)
// TODO: Добавить анимацию попапа, hover на кнопки
var app = app || {};

var consumerType = {
    1 : 'Ф',
    2 : 'Ю'
};

var typeTitle = {
    1 : 'Физическое лицо',
    2 : 'Юридическое лицо'
};

(function ($) {

    app.AppView = Backbone.View.extend({
        el: '.content',

        template: _.template($('#consumerTable').html()),

        initialize: function() {
            this.listenTo(app.consumers, 'sync', this.initCollection);

            var view = new app.PopupView({ model: app.Consumer });
            this.$el.append(view.render().el);

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

        initCollection: function () {
            var tableView = new app.TableView({ collection: app.consumers });
            $('#consumerTable').append(tableView.render().$el);
        }
    });
})(jQuery);
