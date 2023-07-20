import NodeLL from "./NodeLL";

// PROMPT: Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
// The function should zipper the two lists together into single linked list by alternating nodes. 
// If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. 
// The function should return the head of the zippered linked list.
// Do this in-place, by mutating the original Nodes.
// You may assume that both input lists are non-empty.

// ATTEMPT #1
// const zipperLists = (head1, head2) => {
//   let cur1 = head1;
//   let cur2 = head2;
//   let next1 = head1.next;
//   let next2 = head2.next;
//   while (next1 || next2) {
//     if (cur2 && cur1) {
//       cur1.next = cur2;
//       cur1 = next1;
//       cur2.next = next1;
//       cur2 = next2;
//       next1 = next1.next;
//       next2 = next2.next;
//     } 
//   }
//   return cur2
  
// };

// ATTEMPT #2
const zipperLists = (head1: NodeLL, head2: NodeLL): NodeLL => {
    const head = head1;
    let tail = head;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    
    while (current1 !== null && current2 !== null) {
      if (count % 2 === 0) {
        tail.next = current2;
        current2 = current2.next;
      } else {
        tail.next = current1;
        current1 = current1.next;
      }
      tail = tail.next;
      count += 1;
    }
    
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    
    return head;
  }

export default zipperLists;