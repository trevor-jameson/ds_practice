import intersection from "./intersection";

describe("intersection()", () => {
  test("intersection([4,2,1,6], [3,6,9,2,10]): ", () => {
    const result = intersection([4,2,1,6], [3,6,9,2,10]);
    expect(result).toEqual([6, 2])
  });
  test("intersection([0, ..., 49999], [0, ..., 49999]): ", () => {
    const a = [];
    const b = [];
    for (let i = 0; i < 50000; i += 1) {
      a.push(i);
      b.push(i);
    }
    const result = intersection(a,b);
    expect(result).toEqual(a);
  });
});