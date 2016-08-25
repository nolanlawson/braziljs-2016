function simulateJank() {
  setTimeout(function () {
    var i = 0,
      num = 0,
      rando = ~~(Math.random() * 500000);
    while (i++ < rando) {
      num += Math.random();
    }
    simulateJank();
  }, ~~Math.pow(Math.random() * 10, 3));
}

simulateJank();