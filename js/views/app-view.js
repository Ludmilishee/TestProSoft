/* global Backbone, jQuery, _ */
var app = app || {};
var list;

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

        template: _.template($("#consumerTable").html()),


        initialize: function() {
            this.listenTo(app.consumers, "change", this.render);
            this.listenTo(app.consumers, 'sync', this.getData);

            var view = new app.PopupView();
            this.$el.append(view.render().el);

            app.consumers.fetch({
                success: function(data) {
                    list = data["models"];
                },
                error: function(){
                    alert('There was some error in loading and processing the JSON file');
                }
            });
        },

        render: function() {

            return this;
        },

        getData: function () {
            $(this.el).append(this.template({ consumers: list }));
        }
    });
})(jQuery);
