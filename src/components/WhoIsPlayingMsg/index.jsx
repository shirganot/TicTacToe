import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';

const WhoIsPlayingMsg = () => {
  // useSelectors
  const { turn, p2 } = useSelector(({ players }) => players);
  const { whichPlayerIAm } = useSelector(({ socketInfo }) => socketInfo);

  // funcs
  const getTheRightMsg = () => {
    if (!p2) return 'Waiting to the second player';
    if (whichPlayerIAm === turn) return 'Your turn!!';
    return 'The Other Player Turn';
  };

  return <h1 className="who-is-playing-msg">{getTheRightMsg()}</h1>;
};

export default WhoIsPlayingMsg;
