import zipperLists from "./zipperLists";
import linkedListValues from "./linkedListValues";
import NodeLL from "./NodeLL";

describe("zipperLists()", () => {
    test('reverses the linked lists order and returns the new head', () => {
        const a = new NodeLL("a");
        const b = new NodeLL("b");
        const c = new NodeLL("c");
        a.next = b;
        b.next = c;
        // a -> b -> c
        
        const x = new NodeLL("x");
        const y = new NodeLL("y");
        const z = new NodeLL("z");
        x.next = y;
        y.next = z;
    
        const result = zipperLists(a, x);
        const listValues = linkedListValues(a);
        
        expect(result).toBe(a)
        expect(listValues).toEqual(["a", "x", "b", "y", "c", "z"]);
    });
})