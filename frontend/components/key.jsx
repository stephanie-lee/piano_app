var React = require('react');
var Note = require('../util/Note.js');
var Tones = require('../constants/Tones.js');
var KeyStore = require('../stores/KeyStore.js');

var Key = React.createClass({
  getInitialState: function(){
    return ({
      currentKeys: KeyStore.all(),
      playing: false
    });
  },

  _currentKeysChanged: function(){
    this.setState({currentKeys: KeyStore.all() });
  },

  componentWillMount: function(){
    var freq = Tones[this.props.noteName];
    this.note = new Note(freq);
    this.token = KeyStore.addListener(this._currentKeysChanged);
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
    return(
      <section className={className}>{noteName}</section>
    );
  }

});

module.exports = Key;
