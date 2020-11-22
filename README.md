# Tic Tac Toe

Using React, React Hooks, NodeJs, SocketIo, Redux, Scss, Express.<br/>
The project contains 2 pages - Home page and Game page.<br/>
There is an option to restart the game at the end.

## How to start?

In 2 terminals-

- `npm start`
- `npm run server`

## Redux

I accessed to redux store by using 2 redux-react hooks:

- **useSelector**: replacement for mapStateToProps.
- **useDispatch**: replacement for mapDispatchToProps.

## SocketIo

- **Server side**: inside server folder (serverSocket.js). I created the socket server by using express.
- **Client side**: the initialization is inside src/clientSocket.js.
  The listeners initialization are inside src/actions/socketAction.js.
  The emits are all over the code.

# notes

- I am sure that I can make the socket calls more efficient.
- I added a restart option. It works, but not for all end cases.
