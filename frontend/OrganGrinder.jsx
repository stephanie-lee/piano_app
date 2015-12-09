var keyListeners = require('./util/KeyListener.js');
var React = require('react');
var ReactDOM = require('react-dom');
var keyStore = require('./stores/KeyStore.js');

$(keyListeners.addListeners());

console.log("cat");
