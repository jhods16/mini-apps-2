import React from 'react';

let DatePicker = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      From: 
      <input 
        type='text' 
        placeholder='YYYY-MM-DD' 
        style={{margin: '5px'}} 
        name='start'
        onChange={props.handleChange.bind(this)}>
        </input>
      To:
      <input 
        type='text' 
        placeholder='YYYY-MM-DD' 
        style={{margin: '5px'}}
        name='end'
        onChange={props.handleChange.bind(this)}>
        </input>
      <button type='submit'>Request Date Range</button>
    </form>
  )
}

export default DatePicker;