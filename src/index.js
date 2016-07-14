var extend = require("@nathanfaucett/extend"),
    isFunction = require("@nathanfaucett/is_function"),
    arrayCopy = require("@nathanfaucett/array_copy"),
    isObject = require("@nathanfaucett/is_object"),
    isArrayLike = require("@nathanfaucett/is_array_like");


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
