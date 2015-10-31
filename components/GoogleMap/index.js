/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
 // only for common js environments 

class GoogleMap extends React.Component {

  
  componentDidMount() {
     if (typeof window === 'undefined') return '';
    this.initMap();
  }

  initMap() {
    var GoogleMapsLoader = require('google-maps');

    GoogleMapsLoader.KEY = 'AIzaSyDctlnXMDCnbkM9KWbR_AKHxF2ictV0RuU';
    GoogleMapsLoader.load(function(google) {
        new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 10
        });
    });
  }

  render(): ?ReactElement {
   
    return (
      <div className="GoogleMap">
        <div id="map"></div>
      </div>
    );
  }
}

GoogleMap.propTypes = {
  id: PropTypes.any.isRequired,
};

export default GoogleMap;
