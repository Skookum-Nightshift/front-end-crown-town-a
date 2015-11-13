/** @flow */

require('./styles.css');


import React from 'react';
import UserActions from '../../actions/UserActions';
import Button from 'Button';
import {apiPost} from 'requestLib';
import Input from 'Input';

var {PropTypes} = React;


class WeightButton extends React.Component {
	constructor() {
    super();

    this.state = {
      daily_compost_weight: '',
   	};

    this.handleWeight = this.handleWeight.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleWeight() {
   	apiPost(
   		'v1/users/weight',
  		{
  			user_id: this.props.userId,
  			daily_compost_weight: this.state.daily_compost_weight
  		},
      (data) => {
        console.log(data);
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
      <div className="WeighButton">
        <Input placeholder="Compost Weight"
        value={this.state.daily_compost_weight} name="daily_compost_weight"
        onInputChange={this.updateState} />
        <Button onClick={this.handleWeight}>Daily Weight</Button>
      </div>
    );
  }
}

WeightButton.propTypes = {
  userId: PropTypes.any.isRequired,
};

export default WeightButton;
