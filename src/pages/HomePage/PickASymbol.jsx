import React from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clientSocket from '../../clientSocket';

// No player enter the game yet
const PickASymbol = () => {
  // hooks
  const { p1 } = useSelector(({ players }) => players);
  const history = useHistory();

  // funcs
  const chooseASymbol = ({ target: { name } }) => {
    clientSocket.emit('which-player-I-am');
    clientSocket.emit('put-players-symbol', { symbol: name });
    history.push('/game');
  };

  return (
    <div className="pick-a-symbol">
      <h2>Pick a symbol</h2>
      {p1 && <p>Only 1 symbol left</p>}

      <div className="btn-container">
        <button type="button" name="x" onClick={chooseASymbol} disabled={p1 === 'x'}>
          <img src="/imgs/x.svg" alt="x" />
        </button>
        <button type="button" name="o" onClick={chooseASymbol} disabled={p1 === 'o'}>
          <img src="/imgs/o.svg" alt="o" />
        </button>
      </div>
    </div>
  );
};

export default PickASymbol;
