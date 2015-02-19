var assert = require("assert"),
    copy = require("../src/index");


describe("copy(object)", function() {
    it("should return a shallow copy of object", function() {

        assert.deepEqual(copy([1, 2, 3, 4]), [1, 2, 3, 4]);

        assert.deepEqual(copy({
            key: "value"
        }), {
            key: "value"
        });
    });
});
