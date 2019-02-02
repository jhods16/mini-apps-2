import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';

const initialState = {
  setBoard: [
    [0,0,0,0,0,0,0,0,0,9],
    [0,0,0,0,0,0,0,0,0,0],
    [0,9,0,0,9,0,0,9,0,0],
    [0,9,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,9,0,0,0,0,9,0,0],
    [0,0,0,0,0,9,0,0,0,0],
    [0,0,0,0,0,0,0,0,9,0],
    [0,9,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ]
}

let configureStore = () => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}

export default configureStore;