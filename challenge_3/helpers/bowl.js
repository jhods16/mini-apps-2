const bowl = (pins, currStrikes, currSpares, currPlay) => {
  let newPlay = {
    bowlScore: {
      roll1: currPlay.bowlScore.roll1,
      roll2: currPlay.bowlScore.roll2,
    },
    frameScore: currPlay.frameScore,
    totalScore: currPlay.totalScore,
    frameNum: currPlay.frameNum,
    roll: currPlay.roll,
  };

  if (newPlay.frameNum !== 10) {
    if (newPlay.roll === 1) {
      if (pins === 10) {
        // add to currStrikes queue 
        currStrikes[newPlay.frameNum] = [];
        // set the newPlay.bowlScore.roll1 = 10
        newPlay.bowlScore.roll1 = pins;
        newPlay.frameNum.push(1);
      } else {
        // set the roll's score: newPlay.bowlScore.roll1 = pins
        newPlay.bowlScore.roll1 = pins;
        newPlay.roll = 2
      }
    } else {
      if (pins === 10) {
        // add to currSpares queue --> currSpares[something] = []
        currSpares[newPlay.frameNum] = [];
        // set the newPlay.bowlScore.roll2 = '/'
        newPlay.bowlScore.roll2 = pins;
        newPlay.frameNum += 1;

      } else {
        newPlay.bowlScore.roll2 = pins;
        newPlay.frameScore = newPlay.bowlScore.roll1 + newPlay.bowlScore.roll2
        newPlay.totalScore += newPlay.frameScore
        newPlay.frameNum.push(1);
      }
    }
  }
  return {play: newPlay, strikes: currStrikes, spares: currSpares}
}

module.exports = bowl;