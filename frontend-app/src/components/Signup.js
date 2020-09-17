import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
//import Api from "./kevin";

import "../signup.css";

export default class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  //  const [state, setState] = useState(false);
  handleSubmit = (event) => {
    event.preventDefault();
    const myUserData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    // console.log(myUserData);
    axios
      .post(
        "http://openmarketauth.herokuapp.com/api/v1/auth/register",
        myUserData
      )
      .then(
        (response) => {
          console.log(response);
          window.location = "/login";
        },
        (error) => {
          console.log(error);
        }
      );
  };
  //   }, );
  firstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };
  lastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };
  
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    let url = "/login";
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" id="navbar-style">
          <Navbar.Brand href="#home">
            <img
              src={require("../static/images/neww-logo.png")}
              alt=""
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#">HELP & CONTACT</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
              <Nav.Link href="/login">SIGN IN</Nav.Link>
              <Nav.Link>
                <button type="submit" className="sell-button">
                  SELL
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <p>
                <img
                  src={require("../static/images/signup.png")}
                  alt=""
                  className="open-market"
                />
              </p>
            </div>

            <div className="col-md-5">
              <Form onSubmit={this.handleSubmit}>
                <h2 id="heading-two">Get Started</h2>
                <p>
                  Already have an account?{" "}
                  <a href={url} className="form-link">
                    sign in
                  </a>{" "}
                </p>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    name="firstName"
                    // value={this.state.firstName}
                    required
                    onChange={this.firstNameChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    name="lastName"
                    // value={this.state.lastName}
                    required
                    onChange={this.lastNameChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-input"
                    name="email"
                    // value={this.state.email}
                    required
                    onChange={this.emailChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="form-input"
                    name="password"
                    // value={this.state.password}
                    required
                    onChange={this.passwordChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Comfirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="form-input"
                    name="password"
                    // value={this.state.password}
                    // required
                    onChange={this.passwordChange}
                  />
                </Form.Group>

                <button type="submit" className="button">
                  Create free account
                </button>
                <p>
                  By signing up you agree to the{" "}
                  <a href={url} className="policy-terms">
                    privacy policies
                  </a>{" "}
                  and{" "}
                  <a href={url} className="policy-terms">
                    Terms of service
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Signup;
