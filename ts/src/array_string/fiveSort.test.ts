import fiveSort from "./fiveSort";

describe("fiveSort()", () => {
  test("fiveSort([12, 5, 1, 5, 12, 7]): ", () => {
    const result = fiveSort([12, 5, 1, 5, 12, 7]);
    expect(result.slice(result.length - 2)).toEqual([5, 5]);
  });
  test("fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]): ", () => {
    const result = fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
    expect(result.slice(result.length - 5)).toEqual([5, 5, 5, 5, 5]);
  });
  test("fiveSort([5, 5, 5, 1, 1, 1, 4]): ", () => {
    const result = fiveSort([5, 5, 5, 1, 1, 1, 4]);
    expect(result.slice(result.length - 3)).toEqual([5, 5, 5]);
  });
  test("fiveSort([5, 5, 6, 5, 5, 5, 5]): ", () => {
    const result = fiveSort([5, 5, 6, 5, 5, 5, 5]);
    expect(result.slice(result.length - 6)).toEqual([5, 5, 5, 5, 5, 5] );
  });
});