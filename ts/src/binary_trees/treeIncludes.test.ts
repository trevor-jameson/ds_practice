import NodeBST from "./NodeBST";
import treeIncludes from './treeIncludes';

describe("treeIncludes()", () => {
    test("returns true if the target value is in the tree", () => {
      const a = new NodeBST("a");
      const b = new NodeBST("b");
      const c = new NodeBST("c");
      const d = new NodeBST("d");
      const e = new NodeBST("e");
      const f = new NodeBST("f");
      
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
      
      const result = treeIncludes(a, "e"); 
      expect(result).toEqual(true)
    });

    test("returns true if the target value is in the tree", () => {
      const a = new NodeBST("a");
      const b = new NodeBST("b");
      const c = new NodeBST("c");
      const d = new NodeBST("d");
      const e = new NodeBST("e");
      const f = new NodeBST("f");
      
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
      
      const result = treeIncludes(a, "n"); 
      expect(result).toEqual(false)
    });


    test("returns 0 if the root node is null", () => {
      const result = treeIncludes(null, "b");
      expect(result).toEqual(false);
    });
})
