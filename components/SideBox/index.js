/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class SideBox extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="SideBox">
      </div>
    );
  }
}

SideBox.propTypes = {
  id: PropTypes.any.isRequired,
};

export default SideBox;
