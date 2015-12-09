var KeyActions = require('../actions/KeyActions.js');

var Mapping = {
  65: 'C4',
  83: 'C#4',
  68: 'D4',
  70: 'D#4'
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
