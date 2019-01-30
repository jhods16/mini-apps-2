import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import DataViewer from './components/DataViewer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h2>Historical Data Viewer</h2>
        <Search />
        <DataViewer />
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'))