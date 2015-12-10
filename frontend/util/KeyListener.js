var KeyActions = require('../actions/KeyActions.js');

var Mapping = {
  65: 'C4',
  // 87: 'C#4',
  83: 'D4',
  // 69: 'D#4',
  68: 'E4',
  70: 'F4',
  // 84: 'F#4',
  71: 'G4',
  // 89: 'G#4',
  72: 'A4',
  // 85: 'A#4',
  74: 'B4'
};

    // console.log('kep Pressed');

var keyListeners = {
  addListeners: function(){
    $(document).keydown(function(e){
      var keyName = Mapping[e.keyCode];

      if (keyName) {
        KeyActions.keyPressed(keyName);
      }
      console.log(Mapping[e.keyCode]);
    })

    $(document).keyup(function(e){
      var keyName = Mapping[e.keyCode];

      if (keyName) {
        KeyActions.keyDepressed(keyName);
      }

      console.log(Mapping[e.keyCode]);
    });
  },
};

module.exports = keyListeners;


// $(document).keyup()
