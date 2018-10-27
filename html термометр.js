var thermometer = require('@amperka/thermometer')
  .connect(A4);

setInterval(function() {
  var celsius = thermometer.read('C');
  console.log(
    '<div<b style="front-size: 0.5em")' ,
      'Температура>' ,
    '</div>',
    '</b>' ,
    celsius.toFixed(1),
    'C'
  );
    }, 1000);