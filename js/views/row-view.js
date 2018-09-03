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

        initialize: function () { },

        render: function () {
            let html = this.template(this.model.toJSON());
            this.setElement( $(html) );
            return this;
        },

        showPopup: function () {
            view = new app.PopupView({model: new app.Consumer({id: 100, name: "ss", type: 1, phone: "222"}) });
            this.$el.append(view.render().el);
            $('#type').val("2");
        }
    });
})(jQuery);