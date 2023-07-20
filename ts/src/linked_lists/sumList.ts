import NodeDS from "./NodeDS";

const sumList = (head: NodeDS): number => {
  let curNode: NodeDS | null = head;
  let sum = 0;
  while (curNode) {
    sum += curNode.val;
    curNode = curNode.next;
  }
  return sum;
}

export default sumList;