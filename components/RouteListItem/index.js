/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class RouteListItem extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var {handleClick, item} = this.props;
    handleClick(item);
  }

  render(): ?ReactElement {
    var {id, item} = this.props;

    return (
	    <div className="RouteListItem" onClick={this.handleClick}>
	      <div className="circle">
	        <div className="number">{id+1}</div>
	      </div>
	      <div className="text">
	        <b>{item.address_line_1}</b>
	      </div>
	    </div>
    );
  }
}

RouteListItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default RouteListItem;
