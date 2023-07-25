/* PROMPT: Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

// ATTEMPT #1
// const pairSum = (numbers, targetSum) => {
//   let result;
//   numbers.forEach((a, idxA) => {
//     numbers.forEach((b, idxB) => {
//       if (idxA !== idxB && a + b === targetSum) result = [idxA, idxB];
//     });
//   });
//   return result;
// };

// ATTEMPT #2
const pairSum = (numbers: number[], targetSum: number): number[] => {
  const differences: {
    [index: number]: number;
  } = {};
  let result: number[] = [];
  numbers.forEach((num, index) => {
    if (num in differences) {
      let prevIndex = differences[num];
      result = [prevIndex, index];
    } else {
      differences[targetSum - num] = index;
    }
  });
  return result;
}

export default pairSum;