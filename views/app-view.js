/* global Backbone, jQuery, _ */
var app = app || {};
var list;

var typeTitle = {
    1 : 'Физическое лицо',
    2 : 'Юридическое лицо'
};

(function ($) {

    app.AppView = Backbone.View.extend({
        el: '.content',
        events: {
            "click .icon":          "open",
            "click .button.edit":   "openEditDialog",
            "click .button.delete": "destroy"
        },

        initialize: function() {
            this.listenTo(app.consumers, "change", this.render);
            this.listenTo(app.consumers, 'sync', this.getData);

            app.consumers.fetch({
                success: function(data) {
                    // alert("Success " + JSON.stringify(data));
                    list = data["models"];
                },
                error: function(){
                    alert('There was some error in loading and processing the JSON file');
                }
            });
        },

        render: function() {


            // Returning the object is a good practice
            // that makes chaining possible
            return this;
        },

        getData: function () {
            for (var l in list) {
                var type = list[l].get('type') === 1 ? 'Ф' : 'Ю';
                this.$el.append('<h5>' +
                    list[l].get('name') + ' ' +
                    '<span title="' + typeTitle[list[l].get('type')] + '"</span>' + type + '</span>' + ' ' +
                    list[l].get('number') +
                    '</h5>'
                );
            }
        }
    });
})(jQuery);
