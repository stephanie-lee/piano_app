var React = require('react');
var KeyStore = require('../stores/KeyStore.js');
var Track = require('../util/Track.js');

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
