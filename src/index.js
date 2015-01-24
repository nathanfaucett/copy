var extend = require("extend"),
    isArrayLike = require("is_array_like");


function copyArray(array) {
    var length = array.length,
        i = -1,
        il = length - 1,
        results = new Array(length);

    while (i++ < il) {
        results[i] = array[i];
    }

    return results;
}

module.exports = function copy(object) {
    return isArrayLike(object) ? copyArray(object) : extend({}, Object(object));
};
