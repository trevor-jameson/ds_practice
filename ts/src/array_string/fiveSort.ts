// PROMPT: Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. 
// Your function should perform this operation in-place by mutating the original array. The function should return the array.

// Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

// ATTEMPT #1
// const fiveSort = (nums) => {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 5) {
//      result.push(...nums.splice(i, 1)); 
//       i--;
//     }
//   };
//   nums.push(...result);
//   return nums;
// };

// const fiveSort = (nums) => {
//   let j = nums.length - 1;
  
//   for (let i = 0; i <= j; i++) {
//     let head = nums[i];
//     while (nums[j] === 5) {
//       j--;
//     }
//     if (head === 5) {
//       nums[i] = nums[j];
//       nums[j] = head;
//       j--;
//     }  
//   }
//   return nums;
// };

// ATEMPT: #2
const fiveSort = (nums: number[]) => {
  let i: number = 0;
  let j: number = nums.length - 1;
  while (i < j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      const current = nums[i];
      nums[i] = nums[j];
      nums[j] = current;
      i++;
    } else {
      i++;
    }
  }
    return nums;
}



export default fiveSort;
