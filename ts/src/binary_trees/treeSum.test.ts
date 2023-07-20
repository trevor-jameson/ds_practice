import NodeBST from "./NodeBST";
import treeSum from './treeSum';

describe("treeSum()", () => {
    test("returns the sum of all number values in the tree", () => {
      const a = new NodeBST(3);
      const b = new NodeBST(11);
      const c = new NodeBST(4);
      const d = new NodeBST(4);
      const e = new NodeBST(-2);
      const f = new NodeBST(1);
      
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      c.right = f;
      
      //       3
      //    /    \
      //   11     4
      //  / \      \
      // 4   -2     1
      
      const result = treeSum(a); // -> 21
      expect(result).toEqual(21)
    })

    test("returns 0 if the root node is null", () => {
      const result = treeSum(null);
      expect(result).toEqual(0);
    })
})
