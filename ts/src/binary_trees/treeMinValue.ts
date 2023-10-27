import NodeBST from "./NodeBST";

const treeMinValue = (node: NodeBST): number => {
  if (node === null) return Infinity;
  let min = node.val;

  const minRight = treeMinValue(node.right);
  const minLeft = treeMinValue(node.left);

  if (minRight < min) min = minRight;
  if (minLeft < min) min = minLeft;
  
  return min;
};

export default treeMinValue;