import React, { useEffect } from 'react';
import './style.scss';
import {
  useSelector,
  // useDispatch
} from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import clientSocket from '../../clientSocket';

const EndGamePopup = () => {
  // useHistory
  const history = useHistory();

  // useSelectors
  const { winner } = useSelector(({ gameResults }) => gameResults);
  const { whichPlayerIAm } = useSelector(({ socketInfo }) => socketInfo);

  useEffect(
    () => () => {
      clientSocket.off('return-players-status');
      clientSocket.off('return-which-player-I-am');
      clientSocket.off('return-cell-changed');
    },
    [],
  );

  // funcs
  const handleEndGameMsg = () => {
    if (winner === whichPlayerIAm) return 'You Won!!!';
    if (winner === 'tie') return 'Its a tie!!';
    return 'You Lost:(';
  };

  const handleStartOver = () => {
    clientSocket.emit('reset-all-socket-server-values');
    history.push('/');
  };

  return (
    <Dialog
      open={Boolean(winner)}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">The Game Results</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <span>{handleEndGameMsg()}</span>
          <span>Do you want to start over?</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleStartOver} color="primary">
          Yes:)
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EndGamePopup;
