import NodeBST from "./NodeBST";
// PROMPT: Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// ATTEMPT #1
// function getChildren(node, result = []) {
//   let tmpResult = [...result, node.val];
//   if (node.left) {
//     tmpResult = [...tmpResult, getChildren(node.left, tmpResult)]
//   }
//   if (node.right) {
//     tmpResult = [...tmpResult, getChildren(node.right, tmpResult)]
//   }
//   return tmpResult
// }

// const depthFirstValues = (root) => {
//   return getChildren(root)
// };

// ATTEMPT #2
const depthFirstValues = (node: NodeBST, values: any[] = []): any[] => {
    if (node) {
      if (node !== null) values.push(node.val)
      if (node.left) depthFirstValues(node.left, values);
      if (node.right) depthFirstValues(node.right, values);
    }
  
    return values;
}

export default depthFirstValues;