import React from 'react';
import ReactDOM from 'react-dom';
import PinSelector from './components/PinSelector.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import addToStrike from '../helpers/addToStrike.js';
import addToSpare from '../helpers/addToSpare.js';
import bowl from '../helpers/bowl.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      play: {
        bowlScore: {
          roll1: 0,
          roll2: 0,
        },
        frameScore: 0,
        totalScore: 0,
        frameNum: [1],
        roll: 1
      },
      strikes: {},
      spares: {},
      plays: []
    }
    this.selectPinCount = this.selectPinCount.bind(this);
  }

  selectPinCount(e) {
    let pins = Number(e.target.innerText);
    // let completeStrikeTally = addToStrike(this.state.strikes, pins, this.state.play);
    // let completeSpareTally = addToSpare(this.state.spares, pins, this.state.play);
    // get the key and value of the strike/spare and somehow pass down that count to the
    // respective frame
    // let strikeFrame = Object.keys(completeStrikeTally)[0];
    // let strikeSum = Object.values(completeStrikeTally)[0];
    // let spareSum = Object.values(completeStrikeTally)[0];
    // let spareFrame = Object.keys(completeStrikeTally)[0];
    let newBowl = bowl(pins, {}, {}, this.state.play);
    this.setState({
      play: this.state.play,
      strikes: newBowl.strikes,
      spares: newBowl.spares,
      plays: this.state.plays.concat([newBowl.play]),
    })
  }

  render() {
    return (
      <div>
        <PinSelector selectPinCount={this.selectPinCount} />
        <Scoreboard plays={this.state.plays}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

