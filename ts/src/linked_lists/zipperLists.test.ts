import zipperLists from "./zipperLists";
import linkedListValues from "./linkedListValues";
import NodeDS from "./NodeDS";

describe("zipperLists()", () => {
    test('reverses the linked lists order and returns the new head', () => {
        const a = new NodeDS("a");
        const b = new NodeDS("b");
        const c = new NodeDS("c");
        a.next = b;
        b.next = c;
        // a -> b -> c
        
        const x = new NodeDS("x");
        const y = new NodeDS("y");
        const z = new NodeDS("z");
        x.next = y;
        y.next = z;
    
        const result = zipperLists(a, x);
        const listValues = linkedListValues(a);
        
        expect(result).toBe(a)
        expect(listValues).toEqual(["a", "x", "b", "y", "c", "z"]);
    });
})