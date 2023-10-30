/* Count the number of occurances of the target char in 
a string recursively without using a for loop or .length property. */

function countChar(char, targetStr) {
    if (targetStr === '') return 0;
    let matchCount = (char === targetStr[0]) ? 1 : 0
    return countChar(char, targetStr.slice(1)) + matchCount;
}