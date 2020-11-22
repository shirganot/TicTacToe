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

const GamePage = () => {
  // hooks
  const dispatch = useDispatch();
  const { connected, socket } = useSelector(({ socketInfo }) => socketInfo);
  const history = useHistory();

  // useEffects
  useEffect(() => {
    dispatch(sActs.createCellChangeListener());
  }, []);

  useEffect(() => {
    if (!socket.connected && !connected) {
      clientSocket.emit('reset-all-socket-server-values');
      history.push('/');
    }
  }, [connected]);

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
