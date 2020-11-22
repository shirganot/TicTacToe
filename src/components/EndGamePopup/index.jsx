import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const EndGamePopup = () => {
  // useSelectors
  const { winner } = useSelector(({ gameResults }) => gameResults);
  const { whichPlayerIAm } = useSelector(({ socketInfo }) => socketInfo);

  // funcs
  const handleEndGameMsg = () => {
    if (winner === whichPlayerIAm) return 'You Won!!!';
    if (winner === 'tie') return 'Its a tie!!';
    return 'You Lost:(';
  };

  return (
    <Dialog
      open={Boolean(winner)}
      keepMounted
      // onClose={}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">The Game Results</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {handleEndGameMsg()}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default EndGamePopup;
