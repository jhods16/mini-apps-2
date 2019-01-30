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
          {props.data.map((entry, i) => <DataEntry key={i} date={entry.date} description={entry.description}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default DataViewer;