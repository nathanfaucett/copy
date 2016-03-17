var extend = require("extend"),
    isFunction = require("is_function"),
    arrayCopy = require("array_copy"),
    isObject = require("is_object"),
    isArrayLike = require("is_array_like");


module.exports = copy;


function copy(value) {
    var length;

    if (isArrayLike(value)) {
        if (isFunction(value.slice)) {
            return value.slice();
        } else {
            length = value.length;
            return arrayCopy(value, 0, new Array(length), 0, length);
        }
    } else if (isObject(value)) {
        return extend({}, value);
    } else {
        return value;
    }
}
