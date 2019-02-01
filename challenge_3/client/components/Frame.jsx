import React from 'react';

let Frame = (props) => {
  return (
    <div style={{height: '64px', width: '64px', border: '1px solid black', display: 'inline-block'}}>
      <div style={{height: '30px', width: '20px', border: '1px solid black', display: 'inline-block', float: 'right'}}></div>
      <div style={{height: '30px', width: '20px', border: '1px solid black', display: 'inline-block', float: 'right'}}></div>
    </div>
  )
}

export default Frame;