;(function() {
    var start = +new Date();

    // Cria o web worker
    var worker = new Worker('web-worker.js');

    // Diz o que fazer quando o web worker enviar uma mensagem
    worker.addEventListener('message', function(e) {
        const { data } = e
        const primes = data.result
        
        var end = +new Date();
        var time = end - start;

        document.getElementById('number-primes').innerHTML = primes.join(', ')
        document.getElementById('time').innerHTML = `The generation time of these prime numbers was <strong>${time} ms</strong>.`
    });

    // main.js
    worker.postMessage({ limit: 200000 });

    // worker.js
    addEventListener('message', function(e) {
      const { data } = e
      postMessage({ result: getPrimes(data.limit) });
    });
})();