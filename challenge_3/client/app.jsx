import React from 'react';
import ReactDOM from 'react-dom';
import PinSelector from './components/PinSelector.jsx';
import Scoreboard from './components/Scoreboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      frameCount: 0,
      rollNum: 1,
      rollScore: 0,
      totalScore: 0,
    }
    this.selectPinCount = this.selectPinCount.bind(this);
  }

  selectPinCount(e) {
    if (this.state.rollNum === 1) {
      this.setState({
        frameCount: this.state.frameCount,
        rollNum: this.state.rollNum += 1,
        rollScore: this.state.rollScore += Number(e.target.innerText),
        totalScore: this.state.totalScore += Number(e.target.innerText),
      })
    } else {
      this.setState({
        frameCount: this.state.frameCount += 1,
        rollNum: 1,
        rollScore: this.state.rollScore += Number(e.target.innerText),
        totalScore: this.state.totalScore += Number(e.target.innerText),
      })      
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <PinSelector selectPinCount={this.selectPinCount} />
        <Scoreboard frameCount={this.state.frameCount}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

