import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clientSocket from '../../clientSocket';

const Cell = ({ cellId }) => {
  // useSelectors
  const boardArr = useSelector(({ board }) => board);
  const { turn, p2 } = useSelector(({ players }) => players);
  const { whichPlayerIAm } = useSelector(({ socketInfo }) => socketInfo);

  // variables
  const cellSymbol = boardArr[cellId];

  // funcs
  const onClickCell = async () => clientSocket.emit('cell-changed', { cellId });

  return (
    <button
      type="button"
      className={`cell ${(whichPlayerIAm !== turn || !p2) && 'not-active'}`}
      onClick={onClickCell}
      disabled={Boolean(cellSymbol) || whichPlayerIAm !== turn || !p2}
    >
      {cellSymbol && <img src={`./imgs/${cellSymbol}.svg`} alt={cellSymbol} />}
    </button>
  );
};

Cell.propTypes = {
  cellId: PropTypes.number.isRequired,
};

export default Cell;
