import mostFrequentChar from './mostFrequentChar';

describe("mostFrequentChar", () => {
  test("mostFrequentChar('bookeeper'): ", () => {
    const result = mostFrequentChar('bookeeper');
    expect(result).toBe("e");
  });
  test("mostFrequentChar('david'): ", () => {
    const result = mostFrequentChar('david');
    expect(result).toBe("d");
  });
  test("mostFrequentChar('abby'): ", () => {
    const result = mostFrequentChar('abby');
    expect(result).toBe("b");
  });
  test("mostFrequentChar('mississippi'): ", () => {
    const result = mostFrequentChar('mississippi');
    expect(result).toBe("i");
  });
  test("mostFrequentChar('potato'): ", () => {
    const result = mostFrequentChar('potato');
    expect(result).toBe("o");
  });
  test("mostFrequentChar('eleventennine'): ", () => {
    const result = mostFrequentChar('eleventennine');
    expect(result).toBe("e");
  });
  test("mostFrequentChar('riverbed'): ", () => {
    const result = mostFrequentChar('riverbed');
    expect(result).toBe("r");
  });
  
});