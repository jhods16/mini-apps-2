import { connect } from 'react-redux';
import Board from '../components/Board.js';
import setSquare from '../actions/setSquare.js';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  handleSquareClick: (x, y, val) => { 
    dispatch(setSquare(x, y, val)) 
  }
 })

export default connect(mapStateToProps, mapDispatchToProps)(Board);