var alt = require('../alt');
var NeighborhoodActions = require('../actions/NeighborhoodActions');

import cookie from 'react-cookie';

class NeighborhoodStore {
  constructor() {
    this.neighborhood = cookie.load('neighborhood');

    this.bindListeners({
      handleUpdateNeighborhood: NeighborhoodActions.UPDATE_NEIGHBORHOOD,
      handleDeleteNeighborhood: NeighborhoodActions.DELETE_NEIGHBORHOOD,
    });
  }

  handleUpdateNeighborhood(neighborhood) {
    this.neighborhood = neighborhood;
    cookie.save('neighborhood', neighborhood);
  }

  handleDeleteNeighborhood() {
    this.neighborhood = null;
    cookie.remove('neighborhood');
  }
}

module.exports = alt.createStore(NeighborhoodStore, 'NeighborhoodStore');
