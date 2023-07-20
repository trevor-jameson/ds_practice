import NodeBST from "./NodeBST";

// PROMPT: Write a function, breadthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in breadth-first order.

function breadthFirstValues(node: NodeBST | null = null): any[] {
  if (node === null) return [];
  const result: any[] = [];
  const queue: NodeBST[] = [node];
  
  while (queue.length > 0) {
    let current: NodeBST | null = queue.shift() || null;
    result.push(current?.val);
    if (current && current.left !== null) queue.push(current.left);
    if (current && current.right !== null) queue.push(current.right);
  }
  return result;
}

export default breadthFirstValues;