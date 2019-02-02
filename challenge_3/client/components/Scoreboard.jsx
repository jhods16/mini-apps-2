import React from 'react';
import Frame from './Frame.jsx';

let Scoreboard = (props) => {
  return (
    <div>
      {props.plays.map((play, i) => {
        return <Frame 
                key={i} 
                bowlScore={play.bowlScore} 
                totalScore={play.totalScore} />
      })}
    </div>
  )
}

export default Scoreboard;