import React from 'react';

let Frame = (props) => {
  return (
    <div 
      style={
        {height: '64px', 
        width: '64px', 
        border: '1px solid black', 
        display: 'inline-block'}}>{props.totalScore}
      <div 
        style={
          {height: '30px', 
          width: '20px', 
          border: '1px solid black', 
          display: 'inline-block', 
          float: 'right'}}>{props.bowlScore.roll1}</div>
      <div 
        style={
          {height: '30px', 
          width: '20px', 
          border: '1px solid black', 
          display: 'inline-block', 
          float: 'right'}}>{props.bowlScore.roll2}</div>
    </div>
  )
}

export default Frame;