import * as types from '../helpers/actionTypes';
import checkWin from '../helpers/checkWinFunc';

// only because the work didnt complete.
/* eslint-disable-next-line import/prefer-default-export */
export const checkGameResults = () => (dispatch, getState) => {
  const { board } = getState();
  const whoWon = checkWin(board);

  return new Promise((resolve) => {
    dispatch({
      type: types.GAME_RESULTS,
      payload: {
        whoWon,
      },
    });
    resolve();
  });
};
