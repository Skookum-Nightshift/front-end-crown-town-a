import React from 'react';
import {Resolver} from 'react-resolver';

class EmployeeRoute extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="EmployeeRoute">
        EmployeeRoute
      </div>
    );
  }
}

EmployeeRoute.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

EmployeeRoute.displayName = 'EmployeeRoute';

export default Resolver.createContainer(EmployeeRoute, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
