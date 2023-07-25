/* Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.
*/

const uncompress = (str: string): string => {
  let result = '';
  let multiplicand = '';
  for (const char of str) {
    if (Number.isNaN(Number(char))) {
      for (let i = 0; i < Number(multiplicand); i++) {
        result += char;
      }
      multiplicand = '';
    } else {
      multiplicand += char;
    }
  }
  return result;
};

export default uncompress;