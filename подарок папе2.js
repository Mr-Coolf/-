var frequency = 300;

var button = require('@amperka/button')
  .connect(P3);

var buzzer = require('@amperka/buzzer')
  .connect(P5);

button.on('press', function() {
  sound(329,0.5,0.2);
  sound(261,0.5,0.2);
  sound(329,0.5,0.2);
  sound(261,0.5,0.2);
  sound(349,0.5,0.15); 
  sound(329,0.5,0.15); 
  sound(293,0.6,0.5); 
  sound(196,0.5,0.2); 
  sound(196,0.5,0.2); 
  sound(196,0.5,0.1);
  sound(220,0.25,0.1); 
  sound(246,0.25,0.2);
  sound(261,0.5,0.2); 
  sound(261,0.5,0.2); 
  sound(261,0.5,0.2); 
});

function wait(time) {
  //buzzer.frequency(0);
  //buzzer.beep(time);
  currentTime=getTime();
  while(getTime()-currentTime < time){}
}

function sound(frequency, beepLength, pause) {
  buzzer.frequency(frequency);
  buzzer.turnOn();
  wait(beepLength);
  buzzer.turnOff();
  wait(pause);
  console.log(frequency);
}