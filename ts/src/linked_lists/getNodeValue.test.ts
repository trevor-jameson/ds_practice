import getNodeValue from './getNodeValue';
import NodeLL from './NodeLL';

describe("getNodeValue()", () => {
  test('returns the value from node at the target index', () => {
    const a = new NodeLL("a");
    const b = new NodeLL("b");
    const c = new NodeLL("c");
    const d = new NodeLL("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const targetIndex = 2;

    const result = getNodeValue(a, targetIndex);
    expect(result).toEqual("c");
  });
  test('returns null when there is no node at the target index', () => {
    const a = new NodeLL("a");
    const b = new NodeLL("b");
    const c = new NodeLL("c");
    const d = new NodeLL("d");

    a.next = b;
    b.next = c;
    c.next = d;

    const targetIndex = 5;

    const result = getNodeValue(a, targetIndex);
    expect(result).toEqual(null);
  });

  test('returns the value from only node when target index is 0', () => {
    const a = new NodeLL("a");

    const targetIndex = 0;

    const result = getNodeValue(a, targetIndex);
    expect(result).toEqual("a");
  });
});