interface CharMap {
  [index: number | string]: number;
}

const anagrams = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) return false;
  const s1CharMap: CharMap = {};
  for (const char of s1) {
    if (s1CharMap[char]) s1CharMap[char] += 1
    else s1CharMap[char] = 1;
  }
  for (const char of s2) {
    if (s1CharMap[char] && s1CharMap[char] > 0) s1CharMap[char]--
    else return false;
  }
  return true;
};

export default anagrams;