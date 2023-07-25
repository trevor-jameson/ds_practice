import anagrams from './anagrams';

describe("anagrams", () => {
  test("anagrams('restful', 'fluster'): ", () => {
    const result = anagrams('restful', 'fluster');
    expect(result).toBe(true);
  });
  test("anagrams('cats', 'tocs'): ", () => {
    const result = anagrams('cats', 'tocs');
    expect(result).toBe(false);
  });
  test("anagrams('monkeyswrite', 'newyorktimes'): ", () => {
    const result = anagrams('monkeyswrite', 'newyorktimes');
    expect(result).toBe(true);
  });
  test("anagrams('paper', 'reapa'): ", () => {
    const result = anagrams('paper', 'reapa');
    expect(result).toBe(false);
  });
  test("anagrams('tax', 'taxi'): ", () => {
    const result = anagrams('tax', 'taxi');
    expect(result).toBe(false);
  });
});