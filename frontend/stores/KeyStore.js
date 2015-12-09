var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyStore = new Store(AppDispatcher);

window.KeyStore = KeyStore;
window.AppDispatcher = AppDispatcher;

var _keys = [];
KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "ADD_KEY":
      createNote(payload.keyName);
      break;
    case "REMOVE_KEY":

  }
};

var createNote = function(note) {
  _keys.push(note);
  KeyStore.__emitChange();
};

var removeNote = function(note) {
  if(note)
  _keys.indexOf
}

module.exports = KeyStore;
