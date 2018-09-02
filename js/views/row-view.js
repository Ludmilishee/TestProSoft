/* global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    app.RowView = Backbone.View.extend({
        template: _.template('<tr>' +
            '<td ><%= name %></td>' +
            '<td title=\" <%= typeTitle[type] %> \"><%= consumerType[type] %></td>' +
            '<td><%= phone %></td>' +
            '<td class="tool">' +
            '<img class="edit" src="img/pencil.png">' +
            '<img class="delete" src="img/cancel.png">' +
            '</td></tr>'),

        initialize: function () {},

        render: function () {
            var html = this.template(this.model.toJSON());
            this.setElement( $(html) );
            return this;
        }
    });
})(jQuery);