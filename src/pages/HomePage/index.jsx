import React, { useEffect } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import * as sActs from '../../actions/socketAction';
import clientSocket from '../../clientSocket';
import PickASymbol from './PickASymbol';

const HomePage = () => {
  // useDispatch
  const dispatch = useDispatch();

  // useSelectors

  // useEffects
  useEffect(async () => {
    await dispatch(sActs.connectToSocket());
    dispatch(sActs.createWhichPlayerIAmListener());
    dispatch(sActs.createPlayersStatusListener());
    clientSocket.emit('get-players-status');
  }, []);

  return (
    <div className="home-page page">
      <h1>Welcome to Tic Tac Toe game!</h1>
      <PickASymbol />
    </div>
  );
};

export default HomePage;
