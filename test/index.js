var tape = require("tape"),
    copy = require("..");


tape("copy(value) should return a shallow copy of object", function(assert) {
    assert.deepEqual(copy([1, 2, 3, 4]), [1, 2, 3, 4]);

    assert.deepEqual(copy({
        key: "value"
    }), {
        key: "value"
    });

    assert.end();
});
