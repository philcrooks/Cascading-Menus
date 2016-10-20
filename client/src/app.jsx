var React = require('react');
var ReactDOM = require('react-dom');

var Container = require('./components/container.jsx');

window.onload = function(){
  ReactDOM.render(
    <Container url="http://hp-api.herokuapp.com/api/characters"></Container>,
    document.getElementById('app')
  );
}
