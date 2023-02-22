;(function() {
    function fazAlgo() {
        for (var i = 0; i < 120000; i++) {
            Math.sqrt(Math.sin(Math.random())*Math.PI);
        }
        console.log('fiz algo');
    }

    function makeAny(limit) {
        for (let i = 0; i < limit; i++) {
          fazAlgo()
        }
    }
      
    document.querySelector('.button').addEventListener("click", () => {
      console.log('fazer algo');
      makeAny(10000)
    });
})();