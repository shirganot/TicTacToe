import React from 'react';
import './style.scss';
import Board from '../../components/Board';
import PlayersSummery from '../../components/PlayersSummery';

const GamePage = () => {
  return (
    <div className="game-page page">
      <Board />
      <PlayersSummery />
    </div>
  );
};

export default GamePage;
