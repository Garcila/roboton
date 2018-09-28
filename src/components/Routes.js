import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import RobotsPage from '../containers/RobotsPage';
import RobotPage from '../containers/RobotPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={RobotsPage} />
      <Route path="/robots/:id" component={RobotPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
