var thermometer = require('@amperka/thermometer')
  .connect(A4);

var button = require('@amperka/button')
  .connect(P3);

button.on('press', function() {
  setInterval(function() {
    var celsius = thermometer.read('C');
    console.log('<div style="front-size: 0.5em"> Температура </div>');
    console.log('<b>', celsius.toFixed(1), ' C </b>');
  }, 1000);
});
  button.on('press', function() {
    setInterval(function() {
      var kelvin = thermometer.read('K');
      console.log('<div style="front-size: 0.5em"> Температура </div>');
      console.log('<b>', kelvin.toFixed(1), ' C </b>');
    }, 1000);
  });
    button.on('press', function() {
      setInterval(function() {
        var faren = thermometer.read('F');
        console.log('<div style="front-size: 0.5em"> Температура </div>');
        console.log('<b>', faren.toFixed(1), ' C </b>');
      }, 1000);
    });