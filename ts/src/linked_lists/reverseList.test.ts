
import reverseList from './reverseList';
import linkedListValues from './linkedListValues';
import NodeLL from './NodeLL';

describe("reverseList()", () => {
  test('reverses the linked lists order and returns the new head', () => {
    const a = new NodeLL("a");
    const b = new NodeLL("b");
    const c = new NodeLL("c");
    const d = new NodeLL("d");
    const e = new NodeLL("e");
    const f = new NodeLL("f");

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