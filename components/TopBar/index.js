/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class TopBar extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="TopBar">
        <div className="top_logo"></div>
      </div>
    );
  }
}

TopBar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default TopBar;
