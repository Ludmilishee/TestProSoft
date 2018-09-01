(function ($) {
    app.PopupView = Backbone.View.extend({

        template: _.template($("#popup").html()),

        events: {
            "click .add": "showPopup",
            "submit .container": "addConsumer"
        },

        initialize: function () {
            $(".close").click(function () {
                $(".modal").css("display", "none");
            });
        },

        render: function () {
            this.$el.html(this.template());

            return this;
        },

        showPopup: function () {
            $(".modal").css("display", "block");
        }

        // addConsumer: function(e){
        //     this.model.set({id: 100, name: "sss", type: 1, number: "88889"})
        //     app.consumers.save(this.model);
        // }
    });
})(jQuery);