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
    <DefaultRoute name="login" handler={Login} />
    <NotFoundRoute handler={NotFound} />
    <Route name="home" path="/home" handler={Home} />
    <Route name="employeeroute" path="/employeeroute/:id" handler={EmployeeRoute} />
  </Route>
);

export default routes;
