/* PROMPT: Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays. 
You may assume that each input array does not contain duplicate elements. */

// ATTEMPT #1
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

// ATTEMPT #2
// const intersection = (a, b) => {
//   const result = [];
//   const setA = new Set(a);
//   for (const item of b) {
//     if (setA.has(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// Attempt #3
const intersection = (arr1: number[], arr2: number[]) => {
    const matches = [];
    const elemSet = new Set(arr1);
    for (const elem of arr2) {
        if (elemSet.has(elem)) matches.push(elem);
    }
    return matches;
}

export default intersection;
