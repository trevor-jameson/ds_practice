import intersection from './intersection';

describe("intersection", () => {
  test('intersection([4,2,1,6], [3,6,9,2,10]): ', () => {
    const result = intersection([4,2,1,6], [3,6,9,2,10]);
    expect(result).toEqual([6, 2]);
  });
  test('intersection([2,4,6], [4,2]): ', () => {
    const result = intersection([2,4,6], [4,2]);
    expect(result).toEqual([4,2]);
  });
  test('intersection([4,2,1], [1,2,4,6]): ', () => {
    const result = intersection([4,2,1], [1,2,4,6]);
    expect(result).toEqual([1,2,4]);
  });
  test('intersection([0,1,2], [10,11]): ', () => {
    const result = intersection([0,1,2], [10,11]);
    expect(result).toEqual([]);
  });
  test('intersection([0,1,2,3,..., 49999]): ', () => {
    const a = [];
    const b = [];
    const c = [];
    for (let i = 0; i < 50000; i += 1) {
    a.push(i);
    b.push(i);
    c.push(i);
    }
    const result = intersection(a, b);
    expect(new Set(result)).toEqual(new Set(c));
  });
});