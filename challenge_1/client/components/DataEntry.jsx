import React from 'react';

const DataEntry = (props) => {
  return (
    <div>
      <h4>{props.date}</h4>
      <p>{props.description}</p>
    </div>
  )
}

export default DataEntry;