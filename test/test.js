
const powMy = require("../js/models/consumer");
const assert = require("assert");


describe("pow", function() {

    it("возводит в n-ю степень", function() {
        assert.equal(powMy(2, 3), 8);
    });

});