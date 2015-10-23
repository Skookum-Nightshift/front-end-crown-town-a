/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';

/*<div className="nav_bar">
  nav stuff
</div>*/

class AppBase extends React.Component {

  render(): ?ReactElement {
    return (
      <div>
        <br/><br/>
        <div className="image"></div>
        <div className="AppBase">
          <br/>
          <RouteHandler />
        </div>
      </div>
    );
  }
}

export default AppBase;
