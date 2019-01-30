import React from 'react';

const DataEntry = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
    </tr>
  )
}

export default DataEntry;