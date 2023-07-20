import linkedListFind from './linkedListFind';
import NodeLL from './NodeLL';

describe("linkedListFind()", () => {
  test('returns true when a there is a matching value', () => {
    const a = new NodeLL("a");
    const b = new NodeLL("b");
    const c = new NodeLL("c");
    const d = new NodeLL("d");

    a.next = b;
    b.next = c;
    c.next = d;


    const result = linkedListFind(a, "c");
    expect(result).toEqual(true);
  });
  test('returns false when a there is no matching value', () => {
    const a = new NodeLL("a");
    const b = new NodeLL("b");
    const c = new NodeLL("c");
    const d = new NodeLL("d");

    a.next = b;
    b.next = c;
    c.next = d;


    const result = linkedListFind(a, "f");
    expect(result).toEqual(false);
  });

  test('returns true when a there is a matching value in a single-node list', () => {
    const a = new NodeLL("a");

    const result = linkedListFind(a, "a");
    expect(result).toEqual(true);
  });

  test('returns true when a there is no matching value in a single-node list', () => {
    const a = new NodeLL("a");

    const result = linkedListFind(a, "qwerty");
    expect(result).toEqual(false);
  });

});