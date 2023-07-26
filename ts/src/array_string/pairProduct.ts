const pairProduct = (numbers: number[], targetProduct: number) => {
  const divisors: {
    [index: number]: number;
  } = {};
  let result: number[] = [];
  numbers.forEach((num, index) => {
    if (num in divisors) {
      const prevIndex: number = divisors[num];
      result = [prevIndex, index];
    } else {
      divisors[targetProduct / num] = index;
    };
  });
  return result;
};

export default pairProduct;