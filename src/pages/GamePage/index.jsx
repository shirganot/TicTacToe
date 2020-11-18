import React from 'react';
import './style.scss';
import Board from '../../components/Board';
import CurrentPlayer from '../../components/CurrentPlayer';

const GamePage = () => {
  return (
    <div className="gamePage page">
      <CurrentPlayer />
      <Board />
    </div>
  );
};

export default GamePage;
