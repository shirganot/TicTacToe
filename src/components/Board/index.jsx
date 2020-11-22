import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import Cell from '../Cell';

const Board = () => {
  // useSelectors
  const boardArr = useSelector(({ board }) => board);

  return (
    <div className="board">
      {boardArr.map((cellSymbol, index) => (
        <Cell key={uuid()} cellId={index} />
      ))}
    </div>
  );
};

export default Board;
