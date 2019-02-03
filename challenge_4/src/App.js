import React, { Component } from 'react';
import './App.css';
import BoardContainer from './containers/BoardContainer.js';
// import setBoard from './actions/setBoard.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <BoardContainer />
      </div>
    );
  }
}

export default App;