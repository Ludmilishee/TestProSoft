var app = app || {};

mocha.setup('bdd');

var assert = chai.assert;

describe("app.PopupView.pow()", function() {

    it("возводит в n-ю степень", function() {
        // assert.equal(typeof this.pow, 'function');
        var con = new app.PopupView();
        assert.equal(con.pow(2, 3), 8);
    });

});