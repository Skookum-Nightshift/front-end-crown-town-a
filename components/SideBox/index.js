/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import {Link} from 'react-router';
import UserActions from '../../actions/UserActions';

class SideBox extends React.Component {

  logoutUser() {
    UserActions.deleteUser();
  }

  render(): ?ReactElement {
    return (
      <div className="SideBox">
      	<div className="link_item">
        	<i className="fa fa-cog"></i>
        	<div className="caption">Admin</div>
      	</div>

        <Link to="/" className="link_item">
          <i className="fa fa-user"></i>
          <div className="caption">User</div>
        </Link>

        <Link to="/routes" className="link_item">
          <i className="fa fa-map"></i>
          <div className="caption">Routes</div>
        </Link>

        <div className="link_item" onClick={this.logoutUser}>
          <i className="fa fa-power-off"></i>
          <div className="caption">Log Out </div>
        </div>
      </div>
    );
  }
}

SideBox.propTypes = {
  // id: PropTypes.any.isRequired,
};

export default SideBox;
