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

export const isPrimeTests = (): void => {
  console.log("isPrime(7): ", isPrime(7) === true)
  console.log("isPrime(31): ", isPrime(31) === true)
  console.log("isPrime(2017): ", isPrime(2017) === true)
  console.log("isPrime(2048): ", isPrime(2048) === false)
  console.log("isPrime(713): ", isPrime(713) === false)
}

export default isPrime;