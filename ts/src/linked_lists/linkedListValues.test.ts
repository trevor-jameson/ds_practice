import linkedListValues from './linkedListValues';
import NodeLL from './NodeLL';

describe("linkedListValues()", () => {
  test('returns an array of all node values in the linked list', () => {
    const a = new NodeLL("a");
    const b = new NodeLL("b");
    const c = new NodeLL("c");
    const d = new NodeLL("d");
    a.next = b;
    b.next = c;
    c.next = d;
    expect(linkedListValues(a)).toEqual([ 'a', 'b', 'c', 'd' ]);
  });
});