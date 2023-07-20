import linkedListFind from './linkedListFind';
import NodeDS from './NodeDS';

describe("linkedListFind()", () => {
  test('returns true when a there is a matching value', () => {
    const a = new NodeDS("a");
    const b = new NodeDS("b");
    const c = new NodeDS("c");
    const d = new NodeDS("d");

    a.next = b;
    b.next = c;
    c.next = d;


    const result = linkedListFind(a, "c");
    expect(result).toEqual(true);
  });
  test('returns false when a there is no matching value', () => {
    const a = new NodeDS("a");
    const b = new NodeDS("b");
    const c = new NodeDS("c");
    const d = new NodeDS("d");

    a.next = b;
    b.next = c;
    c.next = d;


    const result = linkedListFind(a, "f");
    expect(result).toEqual(false);
  });

  test('returns true when a there is a matching value in a single-node list', () => {
    const a = new NodeDS("a");

    const result = linkedListFind(a, "a");
    expect(result).toEqual(true);
  });

  test('returns true when a there is no matching value in a single-node list', () => {
    const a = new NodeDS("a");

    const result = linkedListFind(a, "qwerty");
    expect(result).toEqual(false);
  });

});