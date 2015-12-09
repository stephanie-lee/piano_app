var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyAction = {
  keyPressed: function(keyName) {
    AppDispatcher.dispatch({
      actionType: "ADD_KEY",
      keyName: keyName
    });
  },
  keyDepressed: function(keyName) {
    AppDispatcher.dispatch({
      actionType: "REMOVE_KEY",
      keyName: keyName
    });
  }
};

module.exports = KeyAction;
