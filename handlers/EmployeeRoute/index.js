require('./styles.css');

import React from 'react';
import {apiGet} from 'requestLib';
import Button from 'Button';
import SideBox from 'SideBox';
import TopBar from 'TopBar';
import RouteBox from 'RouteBox';
import {Link} from 'react-router';
import GoogleMap from 'GoogleMap';
import LoggedInHandler from 'LoggedInHandler';
import NeighborhoodStore from '../../stores/NeighborhoodStore';

class EmployeeRoute extends LoggedInHandler {

  constructor(){
    super();

    this.state.neighborhood = NeighborhoodStore.getState().neighborhood;
    this.state.latitude = null;
    this.state.longitude = null;
    this.state.route = null; // RouteStore.getState().route;

    this.getNextRoute = this.getNextRoute.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }

  componentDidMount() {
    this.watchUser();
    this.handleNoUser();

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var {latitude, longitude} = position.coords;
        this.setState({latitude, longitude}, () => {
          // if (!this.state.route) {
            this.getNextRoute();
          // }
        });
      }.bind(this));
    } else {
      alert("NO GEO!!!");
    }
  }

  getNextRoute() {
    var {user, neighborhood, latitude, longitude} = this.state;
    apiGet(`v1/locations/next?neighborhood_id=${neighborhood.id}&lat=${latitude}&long=${longitude}`, {}, 
      (result) => {
        console.log(result);
        // RouteActions.updateRoute(result);
        this.setState({ route: result }, ()=> {
          setTimeout(this.updateLocation, 10000);
        });
      },
      (error) => {
        console.log(error);
      },
      {
        'Authorization': `Bearer ${user.auth_token}`
      }
    );
  }

  updateLocation(){
     if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var{latitude, longitude} = this.state;
        if (latitude !== position.coords.latitude || longitude !== position.coords.longitude){
          this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
        }
        setTimeout( this.updateLocation, 10000);
      }.bind(this));
    } else {
      alert("NO GEO!!!");
    }
  }

  render(): ?ReactElement {
    var {neighborhood, route, latitude, longitude} = this.state;
    
    if (route) {
      var destinationLat = route.latitude;
      var destinationLng = route.longitude;
    }

    return (
      <div>
        <div className="TopBar"></div>
        <SideBox />
        
        <div className="RouteBox">

          <div className="route_list">

            { route ? (
              <div>
                <div>first name: {route.first_name}</div>
                <div>last name: {route.last_name}</div>
                <div>phone: {route.phone_number}</div>
                <div>bucket location: {route.bucket_location}</div>
              </div>
              ) : '' }

          </div>
          <Button onClick={this.getNextRoute}>Next Customer</Button>
        </div>
        { route ? (
          <GoogleMap key={latitude+":"+longitude} lat={latitude} lng={longitude}
                      directions={true} destinationLng={destinationLng}
                      destinationLat={destinationLat} />
          ) : <GoogleMap key="" /> }
        
      </div>
    );
  }
}

EmployeeRoute.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

EmployeeRoute.displayName = 'EmployeeRoute';

export default EmployeeRoute;
