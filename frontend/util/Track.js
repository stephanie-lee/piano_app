var KeyStore = require('../stores/KeyStore.js');

var Track = function(attributes){
  this.name = attributes.name;
  this.roll = attributes.roll;
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.startTime = Date.now();
};

Track.prototype.addNotes = function(notes) {
  var timeSlice = Date.now() - this.startTime;
  var obj = {timeSlice: timeSlice, notes: notes};

  this.roll.push(obj);
  console.log(this.roll);
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};

module.exports = Track;
