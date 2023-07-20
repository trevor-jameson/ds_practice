import NodeBST from "./NodeBST";

// PROMPT: Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
// The function should return the total sum of all values in the tree.

// const treeSum = (root, sum = 0) => {
//   if (root === null) return 0;
//   sum += root.val;
//   if (root.left) sum = treeSum(root.left, sum);
//   if (root.right) sum = treeSum(root.right, sum);
//   return sum;
// };

function treeSum(root: NodeBST | null): number {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
}

export default treeSum;