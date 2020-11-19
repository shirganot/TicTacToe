import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as pActs from '../../actions/playersActions';
import * as bActs from '../../actions/boardActions';

const Cell = ({ id }) => {
  const { players } = useSelector((state) => state);
  const boardArr = useSelector(({ board }) => board);
  const dispatch = useDispatch();
  const cellSymbol = boardArr[id];

  const onClickCell = () => {
    if (!cellSymbol) {
      dispatch(pActs.turnToggle());
      dispatch(bActs.updateBoard(id, players[players.turn]));
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
