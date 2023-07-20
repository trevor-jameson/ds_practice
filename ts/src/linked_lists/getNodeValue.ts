import NodeDS from "./NodeDS";

// PROMPT: Write a function, getNodeValue, that takes in the head of a linked list and an index. 
// The function should return the value of the linked list at the specified index.
// If there is no node at the given index, then return null.

const getNodeValue = (head: NodeDS, index: number): any => {
    let currentIndex = 0;
    let currentNode = head;
    while (currentNode) {
      if (currentIndex === index) return currentNode.val;
      currentIndex++;
      currentNode = currentNode.next;
    }
    return null
  };

  const recursiveGetNodeValue = (node: NodeDS | null, targetIndex: number, currentIndex: number = 0): any => {
    if (node === null) return null;
    if (currentIndex === targetIndex) return node.val;
    return recursiveGetNodeValue(node.next, targetIndex, currentIndex++)
  }

  export default getNodeValue;