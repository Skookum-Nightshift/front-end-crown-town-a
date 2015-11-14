require('./styles.css');

import NeighborhoodStore from '../../stores/NeighborhoodStore';
import NeighborhoodActions from '../../actions/NeighborhoodActions';
import {apiGet} from 'requestLib';
import React from 'react';
import Button from 'Button';
import SideBox from 'SideBox';
import TopBar from 'TopBar';
import RouteBox from 'RouteBox';
import {Link} from 'react-router';
import LoggedInHandler from 'LoggedInHandler';
import RouteListItem from 'RouteListItem';

class Home extends LoggedInHandler {

  constructor() {
    super();

    this.state.routes = [];
    this.state.neighborhood = NeighborhoodStore.getState().neighborhood;

    this.selectNeigborhood = this.selectNeigborhood.bind(this);
  }

  componentDidMount() {
    this.watchUser();
    this.handleNoUser();

    var {user} = this.state;
    apiGet('v1/neighborhoods/needs_pick_up', {},
      (result) => {
        this.setState({ routes: result });
      },
      (error) => {
        console.log(error);
      },
      {
        'Authorization': `Bearer ${user.auth_token}`
      }
    );

  }

  selectNeigborhood(neighborhood) {
    NeighborhoodActions.updateNeighborhood(neighborhood);
    this.context.router.transitionTo('routes');
  }

 render(): ?ReactElement {
    let routeBox = '';
    let {routes, user} = this.state;

    if (user) {
      routeBox = (
        <div className="RouteBox">
          <div className="current_user">
            Hello, {user.full_name}!
          </div>
          <div className="route_list">
            {routes.map((route, index)=> <RouteListItem id={index} item={route} handleClick={this.selectNeigborhood} />)}
          </div>
          <div className="bottom_logo" />
        </div>
      );
    }

    return (
      <div>
         <TopBar />

         <div className="Menu">

           <SideBox />

          { routeBox }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
 // id: React.PropTypes.any.isRequired,
};

Home.contextTypes = {
  router: React.PropTypes.any.isRequired
}

Home.displayName = 'Home';

export default Home;
