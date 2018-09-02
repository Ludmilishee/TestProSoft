var app = app || {};

(function ($) {
    app.TableView = Backbone.View.extend({
        tagName: 'table',

        initialize : function() {
            _.bindAll(this,'render','renderOne');
        },

        render: function() {
            this.collection.each(this.renderOne);
            return this;
        },

        renderOne : function(model) {
            var row = new app.RowView({ model: model });
            this.$el.append(row.render().$el);
            return this;
        }
    });
})(jQuery);