import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import Cell from '../Cell';

const Board = () => {
  const boardArr = useSelector(({ board }) => board);

  return (
    <div className="board">
      <div className="cells-container">
        {boardArr.map((cell, index) => (
          <Cell key={uuid()} id={index} />
        ))}
      </div>
    </div>
  );
};

export default Board;
