import isPrime from './isPrime';

describe("isPrime", () => {
  test('isPrime(7): ', () => {
    const result = isPrime(7);
    expect(result).toBe(true);
  });
  test('isPrime(31): ', () => {
    const result = isPrime(31);
    expect(result).toBe(true);
  });
  test('isPrime(2017): ', () => {
    const result = isPrime(2017);
    expect(result).toBe(true);
  });
  test('isPrime(2048): ', () => {
    const result = isPrime(2048);
    expect(result).toBe(false);
  });
  test('isPrime(713): ', () => {
    const result = isPrime(713);
    expect(result).toBe(false);
  });
});