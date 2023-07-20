import linkedListValues from './linkedListValues';
import NodeDS from './NodeDS';

describe("linkedListValues()", () => {
  test('returns an array of all node values in the linked list', () => {
    const a = new NodeDS("a");
    const b = new NodeDS("b");
    const c = new NodeDS("c");
    const d = new NodeDS("d");
    a.next = b;
    b.next = c;
    c.next = d;
    expect(linkedListValues(a)).toEqual([ 'a', 'b', 'c', 'd' ]);
  });
});