/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class TopBar extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="TopBar">
        { this.props.showBurger ? (
          <div className="hamburger" onClick={this.props.onBurger}>
            <i className="fa fa-bars"></i>
          </div>) : '' }
      </div>
    );
  }
}

TopBar.propTypes = {
  onBurger: PropTypes.func.isRequired,
};

export default TopBar;
