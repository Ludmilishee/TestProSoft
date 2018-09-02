var app = app || {};

(function ($) {
    app.PopupView = Backbone.View.extend({
        template: _.template($('#popup').html()),

        events: {
            "click .add": "showPopup",
            "click .close": "hidePopup",
            "submit .container": "addConsumer"
        },

        initialize: function () {},

        render: function () {
            this.$el.html(this.template());

            return this;
        },

        showPopup: function () {
            $('.modal').css('display', 'block');
        },

        hidePopup: function () {
            $('.modal').css('display', 'none');
        },

        addConsumer: function(e){
            e.preventDefault();
            // var cons = new app.Consumer({id: 100, name: "sss", type: 1, phone: "88889"});
            var arr = this.$el.serializeArray();
            alert(arr);

            //app.consumers.add(cons);
            this.hidePopup();
        }
    });
})(jQuery);