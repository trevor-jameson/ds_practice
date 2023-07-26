// PROMPT: Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

// const intersection = (a, b) => {
//   const uniqueMatches = [];
//   const aMap = {};
//   for (let num of a) {
//     aMap[num] = true;
//   }
  
//   for (let num of b) {
//     if (aMap[num]) {
//       uniqueMatches.push(num);
//       aMap[b] = false;
//     }
//   }
//   return uniqueMatches;
// };

const intersection = (a: number[], b: number[]): number[] => {
  const result = [];
  const setA = new Set(a);
  for (const item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
}

export default intersection;
