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
      removeNote(payload.keyName);
      break;
  }
};

var createNote = function(note) {
  var noteIdx = _keys.indexOf(note);
  if (noteIdx === -1){
    _keys.push(note);
    KeyStore.__emitChange();
  }
};

var removeNote = function(note) {
  var noteIdx = _keys.indexOf(note);
  if (noteIdx !== -1){
    _keys.splice(noteIdx, 1);
    KeyStore.__emitChange();
  }
};

module.exports = KeyStore;
