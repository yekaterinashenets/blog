import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Overview from './containers/Overview';
import './index.scss';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Overview} />
        </Switch>
      </Router>
    );
  }
}

export default App;
