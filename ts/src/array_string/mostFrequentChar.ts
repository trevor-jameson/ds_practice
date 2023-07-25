/* PROMPT: Write a function, mostFrequentChar, that takes in a string as an argument. 
The function should return the most frequent character of the string. 
If there are ties, return the character that appears earlier in the string.
You can assume that the input string is non-empty. 
*/



// ATTEMPT #1
// interface CharMap {
//   [index: string]: { 
//     count: number;
//     firstIndex: number;
//   };
// }

// const mostFrequentChar = (str) => {
//   let mostFreq = str[0];
//   const charMap = {};
  
//   for (let i = 1; i < str.length; i++) {
//     const char = str[i];
//     let curChar = charMap[char];
//     if (!!charMap[char]) {
//       charMap[char].count += 1;
//       if (!charMap[char].firstIndex) charMap[char].firstIndex = i;
//     } else {
//       charMap[char] = {
//         count: 1,
//         firstIndex: i
//       };
//     }
//     if (charMap[char].count >= charMap[mostFreq].count) {
//       mostFreq = char;
//     }
//   }
//   return mostFreq;
// };

// ATTEMPT #2
const mostFrequentChar = (str: string): string => {
  let mostFreq = str[str.length - 1];
  let charCount: {[index: string]: number} = {};
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (char in charCount) charCount[char]++
    else charCount[char] = 1;
    if (charCount[char] >= charCount[mostFreq]) mostFreq = char; 
  }
  return mostFreq;
}

export default mostFrequentChar;
