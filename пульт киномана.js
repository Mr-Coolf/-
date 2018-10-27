  var ir = require('@amperka/ir-receiver')
    .connect(P7);

  var kb = require('@amperka/usb-keyboard');

  var rewindCode = 0xfd20df;

  var forwardCode = 0xfd609f;

  var playCode = 0xfda05f;

  ir.on('recieve', function(code, repeat) {
    if(code === playCode) {
      if(!repeat) {
        kb.tap(kb.KEY.SPACE);
        console.log(code);
      }
    } else if (code === rewindCode) {
      kb.tap([kb.MODIFY.CTRL, kb.KEY.LEFT]);
      console.log(code);
    } else if (code === forwardCode) {
      kb.tap([kb.MODIFY.CTRL, kb.KEY.RIGHT]);
      console.log(code);
    }
  });