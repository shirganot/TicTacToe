import React from 'react';
import './style.scss';
import Cell from '../Cell';

const Board = () => {
  return (
    <div className="board">
      <div className="row">
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className="row">
        <Cell />
        <Cell />
        <Cell />
      </div>
      <div className="row">
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

export default Board;
