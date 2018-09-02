var app = app || {};

(function ($) {
    app.RowView = Backbone.View.extend({


        template: _.template("<tr>"+
            "<td class='name'><%= name %></td>"+
            "<td class='age'><%= type %></td>"+
            "<td class='phone'><%= phone %></td>"+
            "</tr>"),

        initialize: function () {

        },

        render: function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }

    });
})(jQuery);