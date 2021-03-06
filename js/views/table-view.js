/* global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    app.TableView = Backbone.View.extend({
        tagName: 'tbody',

        initialize: function() {
            _.bindAll(this, 'render', 'renderOne');
            this.collection.on('add', this.renderOne);
        },

        render: function() {
            this.collection.each(this.renderOne);
            return this;
        },

        renderOne: function(model) {
            let row = new app.RowView({ model: model });
            this.$el.append(row.render().$el);
            return this;
        }
    });
})(jQuery);