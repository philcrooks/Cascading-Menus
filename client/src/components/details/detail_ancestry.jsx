var React = require('react');

var DetailAncestry = function(props) {
  // console.log(props.data)
  if(!props.data) 
    {return <h4>This character has no known ancestry.</h4>}
  return(
      <div>
        <h4>Ancestry: {props.data}</h4>
      </div>
        )
      }

  

module.exports = DetailAncestry;
