var app = app || {};

(function ($) {
    app.RowView = Backbone.View.extend({
        template: _.template('<tr>' +
            '<td ><%= name %></td>' +
            '<td title=\" <%= typeTitle[type] %> \"><%= consumerType[type] %></td>' +
            '<td><%= phone %></td>' +
            '</tr>'),

        initialize: function () {},

        render: function () {
            var html = this.template(this.model.toJSON());
            this.setElement( $(html) );
            return this;
        }
    });
})(jQuery);