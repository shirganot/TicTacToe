import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import playersReducer from './playersReducer';
import resultsReducer from './gameResultsReducer';
import socketReducer from './socketReducer';

export default combineReducers({
  board: boardReducer,
  players: playersReducer,
  gameResults: resultsReducer,
  socketInfo: socketReducer,
});
