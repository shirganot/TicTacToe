import * as types from '../helpers/actionTypes';
import checkWin from '../helpers/checkWinFunc';

export const checkGameResults = () => (dispatch, getState) => {
  const {
    board,
    players: { p1 },
  } = getState();
  const wonSymbol = checkWin(board);

  const checkWhichPlayerWon = () => {
    switch (wonSymbol) {
      case 'o':
      case 'x':
        return p1 === wonSymbol ? 'p1' : 'p2';
      case '':
      case 'tie':
      default:
        return wonSymbol;
    }
  };

  return new Promise((resolve) => {
    dispatch({
      type: types.GAME_RESULTS,
      payload: {
        whoWon: checkWhichPlayerWon(),
      },
    });
    resolve();
  });
};
