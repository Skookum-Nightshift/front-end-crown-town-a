/** @flow */

require('./styles.css');

import React from 'react';
import TopBar from 'TopBar';
import SideBox from 'SideBox';
var {PropTypes} = React;

class MainBox extends React.Component {

  constructor() {
    super();

    this.state = {
      isOpen: true
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render(): ?ReactElement {
    var {children, canNotToggle} = this.props;
    var {isOpen} = this.state;
    var mainClass = 'MainBox' + (isOpen ? ' is_open' : '' );
    let canToggle = (typeof canNotToggle === 'undefined');

    return (
      <div className="MainBoxWrapper">
        <TopBar onBurger={this.toggleOpen} showBurger={canToggle} />
        <div className={mainClass}>
          <SideBox />
          <div className="RouteBox">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

MainBox.propTypes = {
  id: PropTypes.any.isRequired,
  canNotToggle: PropTypes.any
};

export default MainBox;
