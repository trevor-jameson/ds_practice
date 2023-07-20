// ATTEMPT #1
// const isPrime = (n) => {
//   if (n === 1) return false;
//   for (let i = Math.ceil(n / 2); i > 1; i--) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

const isPrime = (n: number): boolean => {
  if (n === 1) return false;
  for (let i: number = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};


export default isPrime;