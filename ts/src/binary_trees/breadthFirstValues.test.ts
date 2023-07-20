import NodeBST from "./NodeBST";
import breadthFirstValues from './breadthFirstValues';

describe("breadthFirstValues()", () => {
    test("returns an array of the BT values in the breadth first order", () => {
      const a = new NodeBST('a');
      const b = new NodeBST('b');
      const c = new NodeBST('c');
      const d = new NodeBST('d');
      const e = new NodeBST('e');
      const f = new NodeBST('f');
      
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      c.right = f;
      
      //      a
      //    /   \
      //   b     c
      //  / \     \
      // d   e     f
      
      const result = breadthFirstValues(a); 
      expect(result).toEqual(["a", "b", "c", "d", "e", "f"])
    })
})
