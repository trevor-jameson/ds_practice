import NodeLL from "./NodeLL";

const sumList = (head: NodeLL): number => {
  let curNode: NodeLL | null = head;
  let sum = 0;
  while (curNode) {
    sum += curNode.val;
    curNode = curNode.next;
  }
  return sum;
}

export default sumList;