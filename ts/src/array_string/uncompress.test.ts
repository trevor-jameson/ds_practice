import uncompress from './uncompress';

describe("uncompress", () => {
  test('uncompress("2c3a1t"): ', () => {
    const result = uncompress("2c3a1t");
    expect(result).toBe("ccaaat");
  });
  test('uncompress("4s2b"): ', () => {
    const result = uncompress("4s2b");
    expect(result).toBe("ssssbb");
  });
  test('uncompress("2p1o5p"): ', () => {
    const result = uncompress("2p1o5p");
    expect(result).toBe("ppoppppp");
  });
  test('uncompress("3n12e2z"): ', () => {
    const result = uncompress("3n12e2z");
    expect(result).toBe("nnneeeeeeeeeeeezz");
  });
  test('uncompress("127y"): ', () => {
    const result = uncompress("127y");
    expect(result).toBe("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
  });
});