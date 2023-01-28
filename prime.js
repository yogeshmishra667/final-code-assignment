// prime number is a number that is only divisible by 1 and itself

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(12)); // false
console.log(isPrime(37)); // true
