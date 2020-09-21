import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../login.css";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("https://openmarketauth.herokuapp.com/api/v1/auth/login", user)
      .then(
        (response) => {
          console.log(response);
          window.location = "/";
        },
        (error) => {
          console.log(error);
        }
      );
  };
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    let url = "/";
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" id="navbar-style">
          <Navbar.Brand href={url}>
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
              <Nav.Link href="/">JOIN</Nav.Link>
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
                  src={require("../static/images/login.png")}
                  alt=""
                  className="open-market-login"
                />
              </p>
            </div>

            <div className="col-md-5">
              <Form onSubmit={this.handleChange}>
                <h2 id="heading-two">Welcome Back</h2>
                <p>
                  Don't have an account?{" "}
                  <a href={url} className="form-link">
                    create an account
                  </a>{" "}
                </p>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-input"
                    name="email"
                    onChange={this.emailChange}
                    required={true}
                  />
                  {/* <small
                  style={{
                    color: "red",
                    marginLeft: "15px",
                    fontSize: "0.75rem",
                  }}
                >
                  {emaile}
                </small> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="form-input"
                    name="password"
                    autoComplete="current-password"
                    onChange={this.passwordChange}
                    required={true}
                  />

                  {/* <small
                  style={{
                    color: "red",
                    marginLeft: "15px",
                    fontSize: "0.75rem",
                  }}
                >
                  {passworde}
                </small> */}
                </Form.Group>
                <p className="forgot-password">
                  {" "}
                  <a href="/passwordreset">Forgot Password?</a>{" "}
                </p>

                <button type="submit" className="button">
                  Sigin in
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
