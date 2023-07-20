import NodeDS from "./NodeDS";

// PROMPT: Write a function, reverseList, that takes in the head of a linked list as an argument. 
// The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

// ATTEMPT #1
// const reverseList = (head: NodeDS): NodeDS => {
//   let prev = null;
//   let current = head; // { val: a, next: node b}
//   let next = current.next; // {val: b, next: node c}
// //   
//   while (next) {
//     current.next = prev; // {{ val: a, next: null}}
//     prev = current
//     current = next; // val: b, next: node c
//     next = current.next; // node c
//   }
//   current.next = prev;
//   return current;
// }

// ATTEMPT #2
const reverseList = (node: NodeDS): NodeDS => {
    let tail: NodeDS | null = null;
    let current = node;
    let next = node.next;
    while (next) {
        current.next = tail;
        tail = current;
        current = next;
        next = next.next;
    }
    current.next = tail;
    return current;
}

export default reverseList;