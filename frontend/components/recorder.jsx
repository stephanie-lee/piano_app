var React = require('react');
var KeyStore = require('../stores/KeyStore.js');
var Track = require('../util/Track.js');
var KeyAction = require('../actions/KeyAction.js');

var Recorder = React.createClass({
  getInitialState: function(){
    return({
      currentKeys: KeyStore.all(),
      isRecording: false,
      Track: new Track({name: '', roll: []})
    });
  },

  _currentKeysChanged: function() {
      if(this.state.isRecording) {
        this.setState({currentKeys: KeyStore.all()});
        this.state.Track.addNotes(this.state.currentKeys);
        console.log(this.state.currentKeys);
      }
  },

  componentWillMount: function() {
    this.token = KeyStore.addListener(this._currentKeysChanged);
  },

  toggleRecord: function(){
    this.setState({isRecording: !this.state.isRecording });
    this.state.Track.startRecording();
  },

  play: function(){
    if (this.interval) {
      return;
    }

    var playbackStartTime = Date.now();
    var currentNote = 0;
    var timeSlice = this.state.Track.roll[currentNote.timeSlice].timeSlice;

    var intervalId = setInterval(function(){
      if (currentNote < this.Track.roll.length) {
        if(Date.now() - playbackStartTime > timeSlice) {
          KeyAction.keyDepressed
          currentNote = 1;
        }
      }
    });
  },

  render: function(){
    return(
      <div>
        <button onClick={this.toggleRecord} >Record</button>
        <button onClick={this.play}>Play</button>
      </div>
    );
  }
});

module.exports = Recorder;
