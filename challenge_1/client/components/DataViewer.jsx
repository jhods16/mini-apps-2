import React from 'react';
import DataEntry from './DataEntry.jsx'

const DataViewer = (props) => {
  return (
    <div>
      <h3>Data Viewer</h3>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {props.data.map((entry, i) => 
            <DataEntry 
              key={i}
              id={entry.id} 
              date={entry.date} 
              description={entry.description} 
              handleEdit={props.handleEdit}
              handleInput={props.handleInput}
              handleSave={props.handleSave}
              // if the current entry being rendered matches the entry being edited, set the 'editing' prop to true
              editing={props.editing.description === entry.description ? true : false} 
              />
            )}
        </tbody>
      </table>
    </div>
  )
}

export default DataViewer;