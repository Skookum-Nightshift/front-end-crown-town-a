/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class RouteBox extends React.Component {
  render(): ?ReactElement {
    var {children} = this.props
    return (
      <div className="RouteBox">
        {children}
      </div>
    );
  }
}

RouteBox.propTypes = {
  id: PropTypes.any.isRequired,
};

export default RouteBox;
