/* global Backbone */
var app = app || {};

(function () {
    app.Consumer = Backbone.Model.extend({
        defaults: {
            id: 1,
            name: 'Иванов Иван Иванович',
            type: 1,
            phone: '891112223344'
        }
    });
})();
