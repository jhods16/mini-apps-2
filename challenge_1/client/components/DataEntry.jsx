import React from 'react';

const DataEntry = (props) => {
  // if in 'editing' mode, this entry will have different values in the following places
  //  1. contentEditable will be set to 'true'
  //  2. the button click event will call the 'handleSave' function rather than the 'handleEdit' function
  //  3. the button text will read 'Save' rather than 'Edit'
  return (
    <tr>
      <td contentEditable={props.editing} onInput={props.handleInput.bind(this)}>{props.date}</td>
      <td contentEditable={props.editing}>{props.description}</td>
      <td>
        <button onClick={props.editing ? props.handleSave.bind(this) : props.handleEdit.bind(this, props)}>
          {props.editing ? 'Save' : 'Edit'}
        </button>
      </td>
    </tr>
  )
}

export default DataEntry;