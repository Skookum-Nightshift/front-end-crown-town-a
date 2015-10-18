/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';

class AppBase extends React.Component {

  render(): ?ReactElement {
    return (
        <div className="AppBase">
          <div className="nav_bar">
            nav stuff
          </div>
          <RouteHandler />
        </div>
    );
  }
}

export default AppBase;
