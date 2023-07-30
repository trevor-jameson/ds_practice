import NodeLL from "./NodeLL";
// PROMPT: Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

const createLinkedList = (values: NodeLL[]): NodeLL | null => {
  if (values.length < 1) return null;
  const firstVal: any = values.shift();
  let head = new NodeLL(firstVal);
  let tail = head;
  for (const elem of values) {
    const next = new NodeLL(elem);
    tail.next = next;
    tail = next;
  }
  tail.next = null;
  return head;
};