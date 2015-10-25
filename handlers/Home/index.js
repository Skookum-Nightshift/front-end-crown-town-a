require('./styles.css');

import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import React from 'react';
import {apiGet} from 'requestLib' ;
import {Resolver} from 'react-resolver';
import Button from 'Button';
import SideBox from 'SideBox';
import TopBar from 'TopBar';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      user: UserStore.getState().user,
      users: []
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

          <div className="item">
            <i className="fa fa-user"></i>
            <span className="caption">User</span>
          </div>

          <div className="item">
            <i className="fa fa-map"></i>
            <span className="caption">Routes</span>
          </div>
          
          <div className="item">
            <i className="fa fa-power-off"></i>
            <span className="caption">Log Out</span>
          </div>
        </div>
        <div className="user_name_logout">
          {this.state.user ? this.state.user.full_name : ""}
          <br/>
          {this.state.user? <Button onClick={this.handleLogout}>Logout</Button> : <Button onClick={this.handleLogin}>LOG IN</Button> }
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
