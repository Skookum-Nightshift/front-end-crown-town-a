var alt = require('../alt');

class RouteActions {
  updateRoute(route) {
    this.dispatch(route);
  }

  deleteRoute() {
    this.dispatch();
  }
}

module.exports = alt.createActions(RouteActions);
