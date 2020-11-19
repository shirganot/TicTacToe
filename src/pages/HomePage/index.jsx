import React from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as pActs from '../../actions/playersAction';

const HomePage = () => {
  const { p1 } = useSelector(({ players }) => players);

  return (
    <div className="home-page page">
      <h1>Welcome to Tic Tac Toe game!</h1>
      {!p1 ? <PickASymbol /> : <GetFreeSymbol />}
    </div>
  );
};

const PickASymbol = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const chooseASymbol = ({ target: { id } }) => {
    dispatch(pActs.pickASymbol(id, 'p1'));
    history.push('/game');
  };

  return (
    <div>
      <p>Pick a symbol</p>
      <button type="button" id="x" onClick={chooseASymbol}>
        X
      </button>
      <button type="button" id="o" onClick={chooseASymbol}>
        O
      </button>
    </div>
  );
};

const GetFreeSymbol = () => {
  const p1 = useSelector(({ players }) => players.p1);
  const dispatch = useDispatch();
  const history = useHistory();

  const freeSymbol = p1 === 'x' ? 'o' : 'x';

  const moveToGame = () => {
    dispatch(pActs.pickASymbol(freeSymbol, 'p2'));
    history.push('/game');
  };

  return (
    <div>
      <p>
        the remains symbol for this game is
        <span style={{ marginLeft: '1rem' }}>{freeSymbol}</span>
      </p>
      <button type="button" onClick={moveToGame}>
        I want to enter the game
      </button>
    </div>
  );
};

export default HomePage;
