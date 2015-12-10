var keyListeners = require('./util/KeyListener.js');
var React = require('react');
var ReactDOM = require('react-dom');
var keyStore = require('./stores/KeyStore.js');
var Tones = require('./constants/Tones.js');
var Key = require('./components/key.jsx');
var Recorder = require('./components/recorder.jsx');
// var Note = require('./util/Note.js');
window.Recorder = Recorder;
// window.Note = Note;
$(keyListeners.addListeners());

var Keyboard = React.createClass({
  render: function(){
    // var keys = [];
    // for (var noteName in Tones){
    //   keys.push(noteName);
    // }

    var noteNames = Object.keys(Tones);

    return (
      <div>
        <div className="organ">
          {noteNames.map(function(noteName, idx) {
            return (<Key key={idx} noteName={noteName}/>);
          })}
        </div>
        <Recorder />
      </div>
    );
  }
});

$(function(){
  var root = document.getElementById('root');
  ReactDOM.render(<Keyboard />, root);
});
