import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import WorkshopConfirmation from './components/WorkshopConfirmation';
import CreateWorkshop from './components/CreateWorkshop';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/create/workshop-created" component={WorkshopConfirmation} />
        <Route exact path="/create" component={CreateWorkshop} />
      </Switch>
    </Router>
  );
};
