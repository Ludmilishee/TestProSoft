/* global Backbone */
var app = app || {};

(function () {
    var ConsumerList = Backbone.Collection.extend({
        model: app.Consumer,

        url: "server-data/data.json",

        parse: function (response) {

            return response.data
        }
    });

    app.consumersOrigin = new ConsumerList();
})();
