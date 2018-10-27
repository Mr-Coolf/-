var thermometer = require('@amperka/thermometer')
  .connect(A4);

var sensor = require('@amperka/light-sensor')
  .connect(A2);

setInterval(function() {
  var celsius = thermometer.read('C');
  var lx = sensor.read('lx');
  console.log('<div style="front-size: 0.5em"> Температура </div>',
  '<b>', celsius.toFixed(1), ' C </b>',
  '<div style="front-size: 0.5em"> Освещённость </div>',
  '<b>', lx.toFixed(1), ' lx </b>');
}, 1000);