import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';

const PlayersSummery = () => {
  // useSelectors
  const playersInfo = useSelector(({ players }) => players);
  const { whichPlayerIAm } = useSelector(({ socketInfo }) => socketInfo);

  return (
    <div className="players-summery">
      <p>
        Your symbol:
        <span>{whichPlayerIAm ? playersInfo[whichPlayerIAm].toUpperCase() : ''}</span>
      </p>

      <p>
        The other player symbol:
        <span>
          {whichPlayerIAm ? playersInfo[whichPlayerIAm === 'p1' ? 'p2' : 'p1'].toUpperCase() : ''}
        </span>
      </p>
    </div>
  );
};

export default PlayersSummery;
