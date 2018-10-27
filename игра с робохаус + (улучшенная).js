var ir = require('@amperka/ir-receiver').connect(P7);

var led = require('@amperka/led').connect(P1);

var buzzer = require('@amperka/buzzer').connect(P5);

var servo = require('@amperka/servo').connect(P13);

var button = require('@amperka/button').connect(P3);

var armCelling = 0;

button.on('click', function() {
  if (armCelling>170) {
    buzzer.frequency(5555);
    buzzer.beep(1.5);
    armCelling = 90;
    servo.write(armCelling);
  }
  else {
    servo.write(armCelling=armCelling + 10);
    console.log(armCelling);
  }
});

ir.on('receive', function(code, repeat) {
  if (armCelling<10) {
    led.blink(1.5);
    armCelling = 90;
    servo.write(armCelling);
  }
  else {
    servo.write(armCelling=armCelling - 10);
    console.log(armCelling);
  }
});