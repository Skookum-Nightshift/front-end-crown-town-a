require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';

import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import {apiGet} from 'requestLib' ;
import Button from 'Button';
import SideBox from 'SideBox';
import TopBar from 'TopBar';
import RouteBox from 'RouteBox';
import {Link} from 'react-router';

class EmployeeRoute extends React.Component {

  constructor(){
    super();
    this.state = {
    };



  }

  render(): ?ReactElement {
    return (
      <div>
        <div className="TopBar"></div>
        <div className="SideBox">

          <div className="current_link link_item">
            <i className="fa fa-cog"></i>
            <div className="caption">ADMIN</div>
          </div>

          <div className="link_item">
            <i className="fa fa-user"></i>
            <div className="caption">USER</div>
          </div>

          <div className="link_item">
            <i className="fa fa-map"></i>
            <div className="caption">ROUTES</div>
          </div>

          <div className="link_item" onClick={this.handleLogin}>
            <i className="fa fa-power-off"></i>
            <div className="caption">LOG OUT</div>
          </div>

        </div>

      <div className="RouteBox">

        <div className="route_tab">
        <br/>
        Route 1
        </div>

        <div className="route_bar">
        </div>

        <div className="route_list">

          <div className="route_container">
            <div className="bullets">
              <br/>
              <div className="circle">
              <br/>
              <div className="number">1</div>
              </div>
            </div>
            <div className="text"> <b>1243 Tremond Avenue</b><br/></div>
          </div>

          <div className="route_container">
            <div className="bullets">
              <br/>
              <div className="circle">
              <br/>
              <div className="number">2</div>
              </div>
            </div>
            <div className="text"> <b>5934 Remount Road</b><br/> </div>
          </div>

          <div className="route_container">
            <div className="bullets">
              <br/>
              <div className="circle">
              <br/>
              <div className="number">3</div>
              </div>
            </div>
            <div className="text"> <b>1300 West Blvd</b><br/> </div>
          </div>

          <div className="route_container">
            <div className="bullets">
              <br/>
              <div className="circle">
              <br/>
              <div className="number">4</div>
              </div>
            </div>
            <div className="text"> <b>2344 Wilmore Drive</b><br/> </div>
          </div>

          <div className="route_container">
            <div className="bullets">
              <br/>
              <div className="circle">
              <br/>
              <div className="number">5</div>
              </div>
            </div>
            <div className="text"> <b>54645 Bland Street</b><br/> </div>
          </div>

          <div className="route_container">
            <div className="bullets">
              <br/>
              <div className="circle">
              <br/>
              <div className="number">6</div>
              </div>
            </div>
            <div className="text"> <b>2343 Winnifred Street</b><br/> </div>
          </div>

        </div>


      </div>
      </div>

    );
  }
}

EmployeeRoute.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

EmployeeRoute.displayName = 'EmployeeRoute';

export default Resolver.createContainer(EmployeeRoute, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
