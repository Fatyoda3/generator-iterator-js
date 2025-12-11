function* generatePrime(limit) {
  let primeCandidate = 2;
  let divisor = 2;

  while (primeCandidate < limit) {
    while (divisor <= primeCandidate) {

      if (primeCandidate % divisor === 0) {
        if (divisor === primeCandidate) {
          console.log({ prime: primeCandidate });
        } else {
          divisor = primeCandidate;
        }
      }

      divisor += 1;
    }

    divisor = 2;
    yield primeCandidate++;
  }

}

const primes = generatePrime(100);

// for (const prime of primes) {
// console.log({ prime });
// }
primes.next();
primes.next();
primes.next();
primes.next();
primes.next();
primes.next()






