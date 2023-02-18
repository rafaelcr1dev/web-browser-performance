addEventListener('message', function(e) {
    const { data } = e
    postMessage({ result: getPrimes(data.limit) });
});

function getPrimes(limit) {
    let primes = [];
  
    for (let i = 2; i <= limit; i++) {
      let isPrime = true;
  
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primes.push(i);
      }
    }
  
    return primes;
}