import compress from './compress';

describe("compress", () => {
  test('compress("ccaaatsss"): ', () => {
    const result = compress("ccaaatsss");
    expect(result).toBe("2c3at3s");
  });
  test('compress("ssssbbz"): ', () => {
    const result = compress("ssssbbz");
    expect(result).toBe("4s2bz");
  });
  test('compress("ppoppppp"): ', () => {
    const result = compress("ppoppppp");
    expect(result).toBe("2po5p");
  });
  test('compress("nnneeeeeeeeeeeezz"): ', () => {
    const result = compress("nnneeeeeeeeeeeezz");
    expect(result).toBe("3n12e2z");
  });
  test('compress("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"): ', () => {
    const result = compress("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
    expect(result).toBe("127y");
  });
});