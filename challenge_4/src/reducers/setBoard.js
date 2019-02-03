let setBoard = (state = [], action) => {
  if (action.type === 'SET_BOARD') {
    let oldBoard = JSON.parse(JSON.stringify(state))
    oldBoard[action.x][action.y] = action.val;
    return oldBoard
  } 
  return state;
}

export default setBoard;