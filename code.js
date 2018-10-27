var sonic = require('@amperka/ultrasonic')
  .connect({trigPin: P10, echoPin: P11});

var buzzer =require('@amperka/buzzer')
  .connect(P5)
  .frequency(440);

setInterval(function() {
  sonic.ping(function(err, val) {
    if (val < 30) {
      buzzer.turnOff();
    } else if (val < 120) {
      buzzer.beep(0.1, 0.1);
    } else if (val <300) {
      buzzer.beep(0.2, 0.2);  
    } else {
      buzzer.turnOff();
    }
  }, 'cm');
}, 100); 