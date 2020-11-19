import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';

const PlayersSummery = () => {
  const { p1, p2, turn } = useSelector(({ players }) => players);

  return (
    <div className="players-summery">
      <p>
        current Player:
        <span>{turn}</span>
      </p>
      <p>
        player1:
        <span>{p1.toUpperCase()}</span>
      </p>
      <p>
        player2:
        <span>{p2.toUpperCase()}</span>
      </p>
    </div>
  );
};

export default PlayersSummery;
