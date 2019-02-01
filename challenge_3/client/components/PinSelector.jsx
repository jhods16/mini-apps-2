import React from 'react'

let PinSelector = (props) => {
  return (
    <div>
      <button onClick={props.selectPinCount.bind(this)}>1</button>
      <button onClick={props.selectPinCount.bind(this)}>2</button>
      <button onClick={props.selectPinCount.bind(this)}>3</button>
      <button onClick={props.selectPinCount.bind(this)}>4</button>
      <button onClick={props.selectPinCount.bind(this)}>5</button>
      <button onClick={props.selectPinCount.bind(this)}>6</button>
      <button onClick={props.selectPinCount.bind(this)}>7</button>
      <button onClick={props.selectPinCount.bind(this)}>8</button>
      <button onClick={props.selectPinCount.bind(this)}>9</button>
      <button onClick={props.selectPinCount.bind(this)}>10</button>
    </div>
  )
}

export default PinSelector;