function sumPrimes(num) {
  const primes = [];
  let total = 0;
  for (let i = 1; i <= num; i++) {
    if (i == 1 || i == 2 || i == 3) {
      primes.push(i);
      continue;
    }
    let flag = true;
    for (let j = 1; j < primes.length; j++) {
      if (i % primes[j] == 0) flag = false;
    }
    if (flag) primes.push(i)
  }
  for (let el of primes) {
      if (el <= num) total += el;
  }
  return total - 1;
}

sumPrimes(10);