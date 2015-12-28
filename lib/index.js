const countWords = require("count-words");

/**
 * countWordsArray
 * Get the word count as sorted array.
 *
 * @name countWordsArray
 * @function
 * @param {String} s The input string.
 * @param {Boolean} i A flag representing if the word matching is case insensitive.
 * @return {Array} An array of objects containing the `name` and the `count` fields.
 */
module.exports = function countWordsArray(s, i) {
    var words = countWords(s, i);
    return Object.keys(words).map(x => {
        return {
            name: x
          , count: words[x]
        };
    }).sort((a, b) => {
        return a.count < b.count ? 1 : -1;
    });
};
