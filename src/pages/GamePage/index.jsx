import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Board from '../../components/Board';
import PlayersSummery from '../../components/PlayersSummery';
import * as sActs from '../../actions/socketAction';
import WhoIsPlayingMsg from '../../components/WhoIsPlayingMsg';
import EndGamePopup from '../../components/EndGamePopup';
import clientSocket from '../../clientSocket';
import * as types from '../../helpers/actionTypes';

const GamePage = () => {
  // hooks
  const dispatch = useDispatch();
  const { connected } = useSelector(({ socketInfo }) => socketInfo);
  const history = useHistory();

  // useEffects
  useEffect(() => {
    // check if initialization of socket happened
    if (!connected) {
      dispatch({ type: types.RESET_ALL_VALUES });
      clientSocket.emit('reset-all-socket-server-values');
      history.push('/');
    } else dispatch(sActs.createCellChangeListener());

    return () => {
      clientSocket.off('return-players-status');
      clientSocket.off('return-which-player-I-am');
      clientSocket.off('return-cell-changed');
    };
  }, []);

  return (
    <div className="game-page page">
      <WhoIsPlayingMsg />
      <Board />
      <PlayersSummery />
      <EndGamePopup />
    </div>
  );
};

export default GamePage;
