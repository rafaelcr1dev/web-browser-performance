;(function() {
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

    var start = +new Date();
    const primes = getPrimes(200000).join(', ')
      
    window.addEventListener("load", () => {
        var end = +new Date();
        var time = end - start;

        document.getElementById('number-primes').innerHTML = primes
        document.getElementById('time').innerHTML = `The generation time of these prime numbers was <strong>${time} ms</strong>.`
    });
})();