import NodeBST from "./NodeBST";
import treeMinValue from './treeMinValue';

describe("treeMinValue()", () => {
    test("treeMinValue() -> -2", () => {
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
      
      const result = treeMinValue(a); 
      expect(result).toEqual(-2)
    });
    test("treeMinValue() -> 3", () => {
      const a = new NodeBST(5);
      const b = new NodeBST(11);
      const c = new NodeBST(3);
      const d = new NodeBST(4);
      const e = new NodeBST(14);
      const f = new NodeBST(12);
      
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      c.right = f;
      
      //       5
      //    /    \
      //   11     3
      //  / \      \
      // 4   14     12
      
      const result = treeMinValue(a); 
      expect(result).toEqual(3)
    });
    test("treeMinValue() -> -13", () => {
      const a = new NodeBST(-1);
      const b = new NodeBST(-6);
      const c = new NodeBST(-5);
      const d = new NodeBST(-3);
      const e = new NodeBST(-4);
      const f = new NodeBST(-13);
      const g = new NodeBST(-2);
      const h = new NodeBST(-2);
      
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      c.right = f;
      e.left = g;
      f.right = h;
      
      //        -1
      //      /   \
      //    -6    -5
      //   /  \     \
      // -3   -4   -13
      //     /       \
      //    -2       -2
      
      const result = treeMinValue(a); 
      expect(result).toEqual(-13)
    });
    test("treeMinValue() -> 42", () => {
      const a = new NodeBST(42);
      const result = treeMinValue(a); 
      expect(result).toEqual(42)
    });
})
