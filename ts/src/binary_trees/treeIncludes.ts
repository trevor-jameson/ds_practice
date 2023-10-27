import NodeBST from "./NodeBST";

// PROMPT: Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
const treeIncludes = (node: NodeBST | null, match: any): boolean => {
  if (node === null) return false;
  return (node.val === match) || treeIncludes(node.right, match) || treeIncludes(node.left, match); 
};

export default treeIncludes;