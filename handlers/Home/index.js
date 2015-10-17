require('./styles.css');

import React from 'react';
import {apiGet} from 'requestLib' ;
import {Resolver} from 'react-resolver';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {users: [] };
  }

  componentDidMount(){
    apiGet("v1/users", {}, (data) => {
      this.setState({users: data})
    });

  }


  render(): ?ReactElement {
    return (
      <div className="Home">
        HOME
        {this.state.users.map((user) =>{return user.full_name })}
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
