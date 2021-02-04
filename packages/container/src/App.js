import React, { Suspense, lazy } from 'react';
import { Router, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import { createBrowserHistory } from 'history';

import Home from './components/HomeComponent';
import RouteWithLayout from './components/RouteWithLayout';

const CreateWorkshopPage = lazy(() => import('./components/CreateWorkshopPage'));

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <Suspense fallback={<Loader />}>
        <Switch>
          <RouteWithLayout path="/create" Component={CreateWorkshopPage} />
          <RouteWithLayout path="/" Component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};
