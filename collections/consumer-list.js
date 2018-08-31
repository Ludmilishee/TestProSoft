/* global Backbone */
var app = app || {};

(function () {
    var ConsumerList = Backbone.Collection.extend({
        model: app.Consumer,
        url: "storage/data.json",

        parse: function (response) {

            return response.data
        }
    });

    app.consumers = new ConsumerList();

})();
