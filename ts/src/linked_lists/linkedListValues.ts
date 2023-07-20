import NodeDS from './NodeDS';
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

const linkedListValues = (head: NodeDS): any[] => {
  const result = [];
  let currentNode = head;
  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
}

export default linkedListValues;
