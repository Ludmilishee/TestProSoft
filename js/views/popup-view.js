(function ($) {
    app.PopupView = Backbone.View.extend({

        template: _.template($("#popup").html()),

        model: app.Consumer,

        events: {
            "click .add": "addConsumer"
        },

        initialize: function () {
            $(".modal").click(function () {
                $(".modal").css("display", "none");
            })

        },

        render: function () {
            this.$el.html(this.template());

            return this;
        },

        addConsumer: function () {
            $(".modal").css("display", "block");
        }

    });
})(jQuery);