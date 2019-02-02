const addToStrike = (strikes, pins, play) => {
  // for each strike in strikes
  for (let key in strikes) {
    // add pins to strike
    strikes[key].push(pins)
    // if strike.length === 2
    if (strikes[key].length === 2) {
      let sum = 10;
      let stricken = {};
      //  sum total strike score + 10
      for (let i = 0; i < strikes[key].length; i += 1) {
        sum += strikes[key][i];
      }
      stricken[key] = sum;
      //  remove strike from queue
      delete strikes[key]
      //  return the key-value pair {frameNum: sum}
      return stricken;
    }
  }
  // else return 0
  return 0;
}

module.exports = addToStrike;