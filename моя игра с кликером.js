var button = require('@amperka/button')
  .connect(P3);

var led = require('@amperka/led')
  .connect(P1);

var servo = require('@amperka/servo')
  .connect(P13);

var buzzer = require('@amperka/buzzer')
  .connect(P5);

var tow = 0;

button.on('click', function() {
    if (tow === 180) {
    tow = 0;
    servo.write(tow);
    light.blink(2.5);
    buzzer.beep(2.5);
  }
  else {
    servo.write(tow + 5);
    console.log(tow);
  }
});