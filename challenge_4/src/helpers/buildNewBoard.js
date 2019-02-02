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

const generateRandom = (max, min) => {
  return Math.floor(Math.random() * (max-min) + min);
}

const placeBombs = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    let x = generateRandom(0, board.length)
    let y = generateRandom(0, board.length)
    board[x][y] = 'b'
  }
  return board;
}