var React = require('react');
var ReactDOM = require('react-dom');

var CharacterAncestry = require('./components/CharacterAncestry');
var CharacterHouse = require('./components/CharacterHouse');
var CharacterPatronus = require('./components/CharacterPatronus');
var CharacterWand = require('./components/CharacterWand');

window.onload = function(){
  ReactDOM.render(
    <h2>App Started</h2>,
    document.getElementById('app')
  );
}
