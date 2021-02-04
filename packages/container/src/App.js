import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './components/HomeComponent';
import RouteWithLayout from './components/RouteWithLayout';

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Switch>
        <RouteWithLayout path="/" Component={Home} />
      </Switch>
    </Router>
  );
};
