require('./styles.css');

import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import React from 'react';
import {apiGet} from 'requestLib' ;
import {Resolver} from 'react-resolver';
import Button from 'Button';
import SideBox from 'SideBox';
import TopBar from 'TopBar';
import RouteBox from 'RouteBox';
import Link from 'react-router';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      user: UserStore.getState().user,
      users: []
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.userRoutes = this.userRoutes.bind(this);
  }

  componentDidMount(){
    UserStore.listen((state) => {
      this.setState({ user: state.user });
    });

    apiGet("v1/users", {}, (data) => {
      this.setState({users: data})
    });
  }

  handleLogout(){
    UserActions.deleteUser();
  }

  userRoutes() {
    var {routes} = this.state.user;
    var routesListItems = routes.map((route) => {
    return(

        <li><Link to={'/employeeroute/' + route.route_id}>{route.address}</Link></li>
      );
    });

    return (
      <ol>
        {routesListItems}
      </ol>
    );
  }

  handleLogin(){
    this.context.router.transitionTo('login');
  }


  render(): ?ReactElement {
    return (
      <div>
        <div className="TopBar"></div>
        <div className="SideBox">
          <div className="item">
            <i className="fa fa-cog"></i>
            <span className="caption">Admin</span>
          </div>

            <div className="current_link">
              <div className="item">
                <i className="fa fa-user"></i>
                <span className="red">
                  <span className="caption" styles="color:red !important;">User</span>
                </span>
              </div>
            </div>

          <div className="item">
            <i className="fa fa-map"></i>
            <span className="caption">Routes</span>
          </div>
          
          <div className="item">
            <i className="fa fa-power-off"></i>
            <span className="caption">Log Out </span>
          </div>
        </div>

        <div className= "RouteBox"> 
          <div className="dynamic_data">
            <h3 className="current_user">Hello {this.state.user ? this.state.user.full_name : ""}</h3>
            <h4 className="current_routes"> You currently have { this.state.user.routes.length }  route{ this.state.user.routes.length>1 ? 's' : ''} today </h4>
            <div>
              {this.userRoutes()}
            </div>

            <div className="user_name_logout">
              <div className="bottom_logo">
                {this.state.user ? this.state.user.full_name : ""}
                <br/>
                <br/>
                {this.state.user? <Button onClick={this.handleLogout}>Logout</Button> : <Button onClick={this.handleLogin}>LOG IN</Button> }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Home.displayName = 'Home';

export default Home;
