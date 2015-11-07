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
    var {lat, lng, directions, destinationLat, destinationLng} = this.props;
    var GoogleMapsLoader = require('google-maps');

    GoogleMapsLoader.KEY = 'AIzaSyDctlnXMDCnbkM9KWbR_AKHxF2ictV0RuU';
    GoogleMapsLoader.load((google) => {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat, lng},
        zoom: 16
      });

      if (directions) {
        var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });

        // Set destination, origin and travel mode.
        var request = {
          destination: {lat: destinationLat, lng: destinationLng},
          origin: {lat, lng},
          travelMode: google.maps.TravelMode.BICYCLING
        };

        // Pass the directions request to the directions service.
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, (response, status) => {
          if (status == google.maps.DirectionsStatus.OK) {
            // Display the route on the map.
            console.log(response);
            directionsDisplay.setDirections(response);
          }
        });
      }
    })
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
  lat: PropTypes.any.isRequired,
  lng: PropTypes.any.isRequired,
};

GoogleMap.defaultProps = { 
  lat: -34.397,
  lng: 150.644,
  directions: false
};

export default GoogleMap;
