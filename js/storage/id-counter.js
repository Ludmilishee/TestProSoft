var app = app || {};

(function ($) {
    class Counter {

        constructor() {}

        set idInd(id) {
            this.id = id + 1;
        }

        get idInd() {
            return this.id++;
        }
    }

    app.counter = new Counter();
})(jQuery);