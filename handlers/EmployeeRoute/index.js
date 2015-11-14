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
import RouteStore from '../../stores/RouteStore';
import RouteActions from '../../actions/RouteActions'
import WeightButton from 'WeightButton';

class EmployeeRoute extends LoggedInHandler {

  constructor(){
    super();

    this.state.neighborhood = NeighborhoodStore.getState().neighborhood;
    this.state.latitude = null;
    this.state.longitude = null;
    this.state.route = RouteStore.getState().route;

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
          if (!this.state.route) {
            this.getNextRoute();
          }
        });
      }.bind(this));
    } else {
      alert("NO GEO!!!");
    }

    if (this.state.route) {
      var {latitude, longitude} = this.state.route;
      this.setState({latitude, longitude}, ()=> {
        setTimeout(this.updateLocation, 10000);
      });
    }
  }

  getNextRoute() {
    var {user, neighborhood, latitude, longitude} = this.state;
    apiGet(`v1/locations/next?neighborhood_id=${neighborhood.neighborhood_id}&lat=${latitude}&long=${longitude}`, {}, 
      (result) => {
        console.log(result);
        RouteActions.updateRoute(result);
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
      navigator.geolocation.watchPosition(function(position) {
        var{latitude, longitude} = this.state;
        if (latitude !== position.coords.latitude || longitude !== position.coords.longitude){
          this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
        }
      }.bind(this));
    } else {
      alert("NO GEO!!!");
    }
  }

  render(): ?ReactElement {
    var {neighborhood, route, latitude, longitude, user} = this.state;
    
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
                <div>First Name: {route.first_name}</div>
                <div>Last Name: {route.last_name}</div>
                <div>Phone: {route.phone_number}</div>
                <div>Bucket Location: {route.bucket_location}</div>
                <WeightButton userId={route.location_id} />
                <Button onClick={this.getNextRoute}>Next Customer</Button>
              </div>
              ) : 'No more active homes in this neighborhood' }

          </div>
        </div>
        { latitude ? (
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
