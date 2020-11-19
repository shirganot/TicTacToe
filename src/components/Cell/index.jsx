import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as pActs from '../../actions/playersAction';
import * as bActs from '../../actions/boardAction';
import * as grActs from '../../actions/gameResultsAction';

const Cell = ({ id }) => {
  const { players } = useSelector((state) => state);
  const boardArr = useSelector(({ board }) => board);
  const { winner } = useSelector(({ gameResults }) => gameResults);

  const dispatch = useDispatch();
  const cellSymbol = boardArr[id];

  const onClickCell = async () => {
    if (!cellSymbol) {
      dispatch(bActs.updateBoard(id, players[players.turn]));
      await dispatch(grActs.checkGameResults());
      if (!winner) dispatch(pActs.turnToggle());
    }
  };

  return (
    <button type="button" className="cell" onClick={onClickCell} disabled={Boolean(cellSymbol)}>
      {cellSymbol && <img src={`./imgs/${cellSymbol}.svg`} alt={cellSymbol} />}
    </button>
  );
};

Cell.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Cell;
