import React, { Component } from "react";
import "../../styles/Login.css";
import Form from 'react-bootstrap/Form';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="welcomeMsg">Welcome to PHATPHOBIA</div>
        <div className="inputFields">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control size="lg" type="username" placeholder="username" />
          </Form.Group>
          </div>
          <div className="inputFields">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control size="lg" type="password" placeholder="password" />
          </Form.Group>
        </div>
        <div className="loginBtn">
            Login
        </div>
      </div>
    );
  }
}

export default Login;
