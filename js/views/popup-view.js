/* global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
    app.PopupView = Backbone.View.extend({
        template: _.template($('#popup').html()),

        events: {
            "click .close": "hidePopup",
            "submit .container": "addConsumer"
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


            if (this.model) {
                let cons = new app.Consumer({
                    id: this.model.get('id'),
                    name: $('#name').val(),
                    type: $('#type').val(),
                    phone: $('#phone').val()
                });
                app.consumers.set(cons);
            } else {
                let cons = new app.Consumer({
                    id: app.counter.idInd,
                    name: $('#name').val(),
                    type: $('#type').val(),
                    phone: $('#phone').val()
                });
                app.consumers.set(cons);
            }

            this.hidePopup();
        }
    });
})(jQuery);