import * as types from '../helpers/actionTypes';
import clientSocket from '../clientSocket';
import * as pActs from './playersAction';
import * as bActs from './boardAction';
import * as grActs from './gameResultsAction';

export const connectToSocket = () => (dispatch) => {
  clientSocket.on('connect', () => {
    // for checking if connection established
    /* eslint-disable-next-line  no-console */
    console.log('connect from clientttttt');
    return new Promise((resolve) => {
      dispatch({ type: types.CONNECT_TO_SOCKET });
      resolve();
    });
  });

  clientSocket.on('reset-values-success', () => {
    dispatch({ type: types.RESET_ALL_VALUES });
  });
};

export const createPlayersStatusListener = () => (dispatch) => {
  clientSocket.on('return-players-status', (playersStatus) => {
    dispatch(pActs.updatePlayersStatus(playersStatus));
  });
};

export const createWhichPlayerIAmListener = () => (dispatch) => {
  clientSocket.on('return-which-player-I-am', (whichPlayerIAm) => {
    dispatch({
      type: types.DETERMINE_WHICH_PLAYER_I_AM,
      payload: { whichPlayerIAm },
    });
  });
};

export const createCellChangeListener = () => (dispatch, getState) => {
  clientSocket.on('return-cell-changed', async ({ cellId, symbol, turn }) => {
    dispatch(bActs.updateBoard(cellId, symbol));
    await dispatch(grActs.checkGameResults());
    if (!getState().gameResults.winner) dispatch(pActs.updateCurrTurn(turn));
  });
};
