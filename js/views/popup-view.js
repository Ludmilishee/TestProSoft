/* global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    app.PopupView = Backbone.View.extend({
        template: _.template($('#popup').html()),

        events: {
            "click .close": "hidePopup",
            "submit .container": "addConsumer"
        },

        pow: function (a, b) {
            console.log('pow');
            return 8;
        },

        initialize: function () {},

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        hidePopup: function () {
            this.remove();
        },

        addConsumer: function(e){
            e.preventDefault();

            let cons;

            if (this.model) {
                cons = new app.Consumer({
                    id: this.model.get('id'),
                    name: $('#name').val(),
                    type: parseInt($('#type').val()),
                    phone: $('#phone').val()
                });
            } else {
                cons = new app.Consumer({
                    id: app.counter.idInd,
                    name: $('#name').val(),
                    type: parseInt($('#type').val()),
                    phone: $('#phone').val()
                });
            }

            if (cons.isValid()) {
                app.consumers.superset().add(cons, {merge: true});
                this.hidePopup();
            } else {
                $('.err').html(cons.validationError);
            }
        }
    });
})(jQuery);