var alt = require('../alt');

class NeighborhoodActions {
  updateNeighborhood(neighborhood) {
    this.dispatch(neighborhood);
  }

  deleteNeighborhood() {
    this.dispatch();
  }
}

module.exports = alt.createActions(NeighborhoodActions);
