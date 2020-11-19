import React, { useEffect } from 'react';
import './style.scss';
import Board from '../../components/Board';
import PlayersSummery from '../../components/PlayersSummery';
import { connectToSocket } from '../../actions/socketAction';

const GamePage = () => {
  useEffect(() => {
    connectToSocket();
  }, []);

  return (
    <div className="game-page page">
      <Board />
      <PlayersSummery />
    </div>
  );
};

export default GamePage;
