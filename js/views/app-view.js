/* global Backbone, jQuery, _ */
// TODO: Семантическая вёрстка, LocaleStorage (?), вероятно пересмотреть концепцию вывода таблицы (ч/з ещё одно представление)
// TODO: Добавить анимацию попапа
var app = app || {};

var type = {
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

        // template: _.template($("#consumerTable").html()),

        initialize: function() {
            this.listenTo(app.consumers, 'sync', this.initCollection);

            var view = new app.PopupView();
            this.$el.append(view.render().el);

            app.consumers.fetch();
        },

        render: function() {
            return this;
        },

        initCollection: function () {
            var tableView = new app.TableView({ collection: app.consumers });
            this.$el.append(tableView.render().$el);
        }
    });
})(jQuery);
