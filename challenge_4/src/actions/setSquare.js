const setSquare = (x,y, val) => dispatch => {
  dispatch({
    type: 'SET_BOARD',
    x, y, val
  })
}
export default setSquare;