/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class TopBar extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="TopBar">
        <div className="ct_logo">
          <img src="public/images/ct_white_logo.png" />
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default TopBar;
