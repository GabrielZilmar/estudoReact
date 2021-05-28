import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
