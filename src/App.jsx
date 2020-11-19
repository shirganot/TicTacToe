import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GamePage from './pages/GamePage';
// import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/" render={() => <Redirect to="/game" />} />

          <Route exact path="/game" component={GamePage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </div>
  );
}

function NoMatchPage() {
  return <div>no match, please change url</div>;
}

export default App;
