require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Input from 'Input';
import Button from 'Button';
import {apiPost} from 'requestLib';
import UserActions from '../../actions/UserActions';

class Login extends React.Component {

  constructor(){
    super();

    this.state = {
      email: "",
      password: "",
      err: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleSubmit() {
    console.log(this.state.email, this.state.password, this.state.err);

    apiPost(
      "v1/sign_in",
      this.state,
      (data) => {
        console.log(data);
        if (data.role === "employee"){
          UserActions.updateUser(data);
          this.context.router.transitionTo('home');
        }
        else {
          this.setState({err: "motherfucker"});
        }
        /*else {
          this.context.router.transitionTo('error');
        }*/
      }
    );
  }

  updateState(name, value) {
    var state = {};
    state[name] = value;
    this.setState(state);
  }


  render(): ?ReactElement {
    return (
      <div className="my_logo">
        <div className="Login">
          {this.state.err.length > 0 ? this.state.err : ""}
          <br/>
          <Input placeholder="  Username" value={this.state.email} onInputChange={this.updateState} type='email' name='email' />
          <br/><br/>
          <Input placeholder="  Password" value={this.state.password} onInputChange={this.updateState} name='password' type='password' />
          <br/><br/><br/>
          <Button onClick={this.handleSubmit} >LOG IN</Button>
          <br/><br/><br/><br/><br/><br/><br/>
          <div className="role">EMPLOYEE</div>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func.isRequired
};
Login.propTypes = {
};

Login.displayName = 'Login';

export default Resolver.createContainer(Login, {
  resolve: {

  },
});
