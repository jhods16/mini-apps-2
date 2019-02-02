const addToSpare = (spares, pins, play) => {
  // for each spare in spares
  for (let key in spares) {
    // add pins to spare
    spares[key].push(pins)
    // if spare.length === 2
    if (spares[key].length === 2) {
      let sum = 10;
      let stricken = {}
      //  sum total spare score + 10
      for (let i = 0; i < spares[key].length; i += 1) {
        sum += spares[key][i];
      }
      stricken[key] = sum
      //  remove spare from queue
      delete spares[key]
      //  return the key-value pair {frameNum: sum}
      return stricken;
    }
  }
  // else return 0
  return 0;
}

module.exports = addToSpare;