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

        events: {
            "click .edit": "showPopup",
            "submit .container": "addConsumer"
        },

        initialize: function () {
            this.model.on('change', this.render, this);
        },

        render: function () {
            let html = this.template(this.model.toJSON());
            // this.setElement( $(html) );
            this.$el.html(html);
            return this;
        },

        showPopup: function () {
            view = new app.PopupView({ model: this.model });
            this.$el.append(view.render().$el);
        }
    });
})(jQuery);