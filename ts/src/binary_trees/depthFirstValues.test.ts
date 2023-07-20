import NodeBST from "./NodeBST";
import depthFirstValues from './depthFirstValues';

describe("depthFirstValues()", () => {
    test("returns an array of the BT values in the depth first order", () => {
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
        
        const result = depthFirstValues(a); 
        expect(result).toEqual(["a", "b", "d", "e", "c", "f"])
    })
})
