import React from 'react';
import DataEntry from './DataEntry.jsx'

const DataViewer = (props) => {
  return (
    <div>
      <h3>Data Viewer</h3>
      {props.data.map((entry, i) => <DataEntry key={i} date={entry.date} description={entry.description}/>)}
    </div>
  )
}

export default DataViewer;