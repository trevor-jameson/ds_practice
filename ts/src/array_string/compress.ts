// PROMPT: Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// ATTEMPT #1
// const compress = (str) => {
//   let result = '';
//   let prev = '';
//   let multiplicand = 0;
//   for (let char of str) {
//     if (char === prev || prev === '') {
//       prev = char;
//       multiplicand++;
//     } else {
//       if (multiplicand < 2) {
//         result += prev;
//       } else {
//         result += `${multiplicand}${prev}`;
//       }
      
//       prev = char;
//       multiplicand = 1;
//       console.log({char, result})
//     }
//   }
//     if (multiplicand < 2) {
//         result += prev;
//     } else {
//         result += `${multiplicand}${prev}`;
//     }
//   return result;
// };


// ATTEMPT #2
const compress = (str: string): string => {
  let result = '';
  let charCount = 1;
  for (let i = 0; i < str.length; i++) {
    const char = str[i], next = str[i + 1];
    if (char === next) {
      charCount++
    } else {
      if (charCount > 1) {
        result += `${charCount}${char}`;
      } else {
        result += char;
      }
      charCount = 1;
    }
  }
  return result;
}

export default compress;