/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class RouteBox extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="RouteBox">
        RouteBoxxxxxxxxx
      </div>
    );
  }
}

RouteBox.propTypes = {
  id: PropTypes.any.isRequired,
};

export default RouteBox;
