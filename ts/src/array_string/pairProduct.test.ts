import pairProduct from './pairProduct';

describe("pairProduct()", () => {
  test("pairProduct([3, 2, 5, 4, 1], 8): ", () => {
    const result = pairProduct([3, 2, 5, 4, 1], 8);
    expect(result).toEqual([0,2]);
  });
  test("pairProduct([4, 7, 9, 2, 5, 1], 5): ", () => {
    const result = pairProduct([4, 7, 9, 2, 5, 1], 5);
    expect(result).toEqual([0,5]);
  });
  test("pairProduct([4, 7, 9, 2, 5, 1], 3): ", () => {
    const result = pairProduct([4, 7, 9, 2, 5, 1], 3);
    expect(result).toEqual([3,5]);
  });
  test("pairProduct([1, 6, 7, 2], 13): ", () => {
    const result = pairProduct([1, 6, 7, 2], 13);
    expect(result).toEqual([1,2]);
  });
  test("pairProduct([9, 9], 18): ", () => {
    const result = pairProduct([9, 9], 18);
    expect(result).toEqual([0,1]);
  });
  test("pairProduct([6, 4, 2, 8 ], 12): ", () => {
    const result = pairProduct([6, 4, 2, 8 ], 12);
    expect(result).toEqual([1,3]);
  });
});