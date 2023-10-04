const countWords = require("count-words");

/**
 * countWordsArray
 * Get the word count as a sorted array.
 *
 * @name countWordsArray
 * @function
 * @param {String} inputString The input string.
 * @param {Boolean} caseInsensitive A flag representing if word matching is case insensitive.
 * @return {Array} An array of objects containing the `name` and the `count` fields.
 */
module.exports = function countWordsArray(inputString, caseInsensitive) {
    try {
        // Check if the input is a valid string
        if (typeof inputString !== "string") {
            throw new Error("Input should be a string.");
        }

        // Count the words using the count-words library
        const words = countWords(inputString, caseInsensitive);
        
        // Map the word counts to an array of objects with "name" and "count" fields
        const wordCountArray = Object.keys(words).map(word => ({
            name: word,
            count: words[word]
        }));
        
        // Sort the array in descending order based on word count
        wordCountArray.sort((a, b) => b.count - a.count);
        
        // Return the sorted word count array
        return wordCountArray;
    } catch (error) {
        // Handle any errors that may occur and log them
        console.error("Error in countWordsArray:", error.message);
        
        // Return an empty array in case of an error
        return [];
    }
};
