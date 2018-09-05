/* global Backbone */
var app = app || {};

(function () {
    app.Consumer = Backbone.Model.extend({
        validate: function(attrs, options) {
            if (attrs.name.length > 255) {
                return "Имя должно быть менее 255 символов"
            }

            if (attrs.name.length === 0) {
                return "Имя должно содержать хотя бы один символ"
            }

            if (attrs.phone === '' || !attrs.phone.match(/^\d{13}$/)) {
                return "Номер телефона должен содержать 13 цифр"
            }
        },

        defaults: {
            id: 1,
            name: 'Иванов Иван Иванович',
            type: 1,
            phone: '8911122233444'
        }
    });
})();