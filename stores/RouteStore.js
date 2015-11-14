var alt = require('../alt');
var RouteActions = require('../actions/RouteActions');

import cookie from 'react-cookie';

class RouteStore {
  constructor() {
    this.route = cookie.load('route');

    this.bindListeners({
      handleUpdateRoute: RouteActions.UPDATE_ROUTE,
      handleDeleteRoute: RouteActions.DELETE_ROUTE,
    });
  }

  handleUpdateRoute(route) {
    this.route = route;
    cookie.save('route', route);
  }

  handleDeleteRoute() {
    this.route = null;
    cookie.remove('route');
  }
}

module.exports = alt.createStore(RouteStore, 'RouteStore');
