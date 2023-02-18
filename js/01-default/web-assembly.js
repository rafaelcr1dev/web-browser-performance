;(function() {
    var start = +new Date();

    WebAssembly.instantiateStreaming(fetch("program.wasm"), {
        main: {
          get_primes() {
            console.log("Hello from WebAssembly!");
          }
        },
        env: {
          abort(_msg, _file, line, column) {
            console.error("abort called at main.ts:" + line + ":" + column);
          }
        },
      }).then(result => {
        const primes = result.instance.exports.get_primes(200000); 

        var end = +new Date();
        var time = end - start;
    
        document.getElementById('number-primes').innerHTML = primes
        document.getElementById('time').innerHTML = `The generation time of these prime numbers was <strong>${time} ms</strong>.`
        console.log('Finished compiling! Ready when you are...');
      }).catch(console.error);
})();


