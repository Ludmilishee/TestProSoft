/* global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    app.RowView = Backbone.View.extend({
        tagName: 'tr',

        template: _.template('<td ><%= name %></td>' +
            '<td title=\" <%= typeTitle[type] %> \"><%= consumerType[type] %></td>' +
            '<td><%= phone %></td>' +
            '<td class="tool">' +
            '<img class="edit" src="img/pencil.png">' +
            '<img class="delete" src="img/cancel.png">' +
            '</td>'),

        events: {
            "click .edit": "showPopup",
            "click .delete": "deleteRow",
            "submit .container": "addConsumer"
        },

        initialize: function () {
            this.model.on('change', this.render, this);
        },

        render: function () {
            let html = this.template(this.model.toJSON());
            this.$el.html(html);
            return this;
        },

        showPopup: function () {
            view = new app.PopupView({ model: this.model });
            this.$el.append(view.render().$el);
        },

        deleteRow: function () {
            app.consumers.superset().remove(this.model);
            this.remove();
        }
    });
})(jQuery);