const xWinRegex = /(x...?)\1x|^(...)*xxx|^..x.x.x/;
const oWinRegex = /(o...?)\1o|^(...)*ooo|^..o.o.o/;

export default function checkWin(boardArr) {
  let whoWon = '';
  let boardStr = '';
  for (let i = 0; i < boardArr.length; i++) {
    if (boardArr[i] === null) boardStr += 'n';
    else boardStr += boardArr[i];
  }

  const xWin = xWinRegex.test(boardStr);
  const oWin = oWinRegex.test(boardStr);
  const endOfGame = !boardArr.includes(null);

  console.log('check win', xWin, oWin, endOfGame);

  if (xWin) whoWon = 'x';
  else if (oWin) whoWon = 'o';
  else if (!xWin && !oWin && endOfGame) whoWon = 'tie';

  return whoWon;
}