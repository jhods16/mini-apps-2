let board = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
]

let bombs = [];

const generateRandom = (max, min) => {
  return Math.floor(Math.random() * (max-min) + min);
}

const placeBombs = (board, bombs) => {
  for (let i = 0; i < board.length; i += 1) {
    let x = generateRandom(0, board.length)
    let y = generateRandom(0, board.length)
    board[x][y] = 'b'
    bombs.push([x,y])
  }
  placeNums(board, bombs)
}

const placeNums = (board, bombs) => {
  // iterate through board rows
  // iterate through board columns
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // checkForBombs(i, j, bombs)
      checkForBombs(i, j, bombs)
    }
  }
}

const checkForBombs = (i, j, bombs) => {
  let numNearbyBombs = 0;
  let row1 = (i-1 ? i-1 : null);
  let row2 = i;
  let row3 = (i+1 ? i+1 : null);

  let adjSquares = {
    [row1]: [j-1, j, j+1],
    [row2]: [j-1, j, j+1],
    [row3]: [j-1, j, j+1],
  }
  //iterate through bombs array
    // if current bomb === adjSquare
      // numNearbyBombs++
    // else
      // 
}

console.log(placeBombs(board, bombs));