import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const HomePage = () => (
  <div>
    <h1>HomePage</h1>
  </div>
);
class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = event => {
  }
  onChange = event => {
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
      </form>
    );
  }
}
export default HomePage;
