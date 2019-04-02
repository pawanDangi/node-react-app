import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  login = (email, password) => {
    console.log(email, password);
  };

  render() {
    return <LoginForm login={this.login} />;
  }
}

export default Login;
