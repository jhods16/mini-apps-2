import React from 'react';

const Square = ({x, y, val, handleSquareClick}) => {
  return ( 
    <div 
      style={{height: '20px', width: '20px', border: '1px solid black', display: 'inline-block'}}
      onClick={handleSquareClick.bind(this, x, y, 1)}
      >
      <div style={{visibility: 'hidden'}}>{val}</div>
    </div> 
  )
}

export default Square;