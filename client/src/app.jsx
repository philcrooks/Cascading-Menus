var React = require('react');
var ReactDOM = require('react-dom');

var CharacterBox = require('./components/CharacterBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <CharacterBox url="http://hp-api.herokuapp.com/api/characters"></CharacterBox>,
    document.getElementById('app')
  );
}
