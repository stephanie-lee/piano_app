var React = require('react');
var Note = require('../util/Note.js');
var Tones = require('../constants/Tones.js');
var KeyStore = require('../stores/KeyStore.js');

var Key = React.createClass({
  getInitialState: function(){
    return ({
      currentKeys: KeyStore.all(),
      playing: false,
      sharp: false
    });
  },

  _currentKeysChanged: function(){
    this.setState({currentKeys: KeyStore.all() });
  },

  componentWillMount: function(){
    var freq = Tones[this.props.noteName];
    this.note = new Note(freq);
    this.token = KeyStore.addListener(this._currentKeysChanged);

    if (this.props.noteName.length === 3) {
      this.state.sharp = true;
    }
  },

  componentWillUnmount: function(){
    this.token.remove();
  },

  render: function(){
    var currentKeys = this.state.currentKeys;
    var noteName = this.props.noteName;
    if( currentKeys.indexOf(noteName) !== -1) {
      this.note.start();
      this.state.playing = true;
    } else {
      this.note.stop();
      this.state.playing = false;
    }
    var className = (this.state.playing) ? "playing" : "";
    var sharp = (this.state.sharp) ? "sharp" : "";
    return(
      <section className={className + " " + sharp}>{noteName}</section>
    );
  }

});

module.exports = Key;
