import React from 'react';
import Square from './Square.js';

const Board = ({ setBoard, handleSquareClick }) => {
  return (
    <div style={{height: '220px', width: '220px'}}>
      {setBoard.map((rows, i) => {
       return rows.map((square, j) => {
         return <Square key={i+j} x={i} y={j} val={square} handleSquareClick={handleSquareClick}/>
        })
      })}
    </div>
  )
}

export default Board;