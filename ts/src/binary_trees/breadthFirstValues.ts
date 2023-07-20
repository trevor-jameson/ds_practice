import NodeBST from "./NodeBST";

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