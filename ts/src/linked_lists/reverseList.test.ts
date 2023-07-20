
import reverseList from './reverseList';
import linkedListValues from './linkedListValues';
import NodeDS from './NodeDS';

describe("reverseList()", () => {
  test('reverses the linked lists order and returns the new head', () => {
    const a = new NodeDS("a");
    const b = new NodeDS("b");
    const c = new NodeDS("c");
    const d = new NodeDS("d");
    const e = new NodeDS("e");
    const f = new NodeDS("f");

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    const result = reverseList(a);
    const listValues = linkedListValues(f);
    
    expect(result).toBe(f)
    expect(listValues).toEqual(["f", "e", "d", "c", "b", "a"]);
  });
});