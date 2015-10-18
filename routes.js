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
import Error from'./handlers/Error';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <NotFoundRoute handler={NotFound} />
    <Route name="login" path="/login" handler={Login} />
    <Route name="error" path="/error" handler={Error} />
  </Route>
);

export default routes;
