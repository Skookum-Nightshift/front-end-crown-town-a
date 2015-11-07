/** @flow */
import React from 'react';
import Router from 'react-router';

const {
  DefaultRoute,
  Route,
  NotFoundRoute,
} = Router;

import NotFound from './handlers/NotFound';
import App from './handlers/Base';
import Home from'./handlers/Home';
import Login from'./handlers/Login';
import EmployeeRoute from './handlers/EmployeeRoute';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="login" handler={Login} />
    <Route name="routes" handler={EmployeeRoute} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
