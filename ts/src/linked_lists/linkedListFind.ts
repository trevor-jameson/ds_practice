import NodeLL from "./NodeLL";

// PROMPT: Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
// The function should return a boolean indicating whether or not the linked list contains the target.

const linkedListFind = (node: NodeLL, target: any): boolean => {
    while (node !== null) {
      if (node.val === target) return true;
      node = node.next;
    }
    return false;
  }

  export default linkedListFind;