var button = require('@amperka/button')
  .connect(P2);

var buzzer = require('@amperka/buzzer')
  .connect(P5);

var light = require('@amperka/led')
  .connect(P1);

var animation = require('@amperka/animation')
  .create({
    from: 0,
    to: 1,
    loop: true,
    updateInterval: 0.01
  });

var armed = false;

animation.on('update' , function(val) {
  light.brightness(val);
  buzzer.frequency(1000 + 4000 * val);
});

button.on('press' , function() {
  armed = !armed;
  buzzer.toggle(armed);
  light.toggle(armed);
  if (armed) {
    animation.play();
  } else {
    animation.stop();
  }
});