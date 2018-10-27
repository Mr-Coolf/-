var button = require('@amperka/button')
  .connect(P3);

var servo = require('@amperka/servo')
  .connect(P13);

button.on('press', function() {
  console.log(button.on);
  servo.write(70);console.log(0);
  setTimeout("servo.write(30);console.log(1);", 1000);
  setTimeout("servo.write(80);console.log(2);", 1800);
  setTimeout("servo.write(40);console.log(3);", 2950);
  setTimeout("servo.write(90);console.log(4);", 3850);
  setTimeout("servo.write(50);console.log(5);", 5000);
  setTimeout("servo.write(100);console.log(6);", 6200);
  setTimeout("servo.write(60);console.log(7);", 6900);
  setTimeout("servo.write(110);console.log(8);", 8500);
  setTimeout("servo.write(120);console.log(9);", 9900);
  setTimeout("servo.write(80);console.log(10);", 10600);
});