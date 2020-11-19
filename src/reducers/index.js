import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import playersReducer from './playersReducer';

export default combineReducers({
  board: boardReducer,
  players: playersReducer,
});
