import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../login.css";

export default class PasswordReset extends Component {
  state = {
    email: "",
    
  };

  handleChange = (event) => {
    event.preventDefault();
    const password = {
      email: this.state.email,
      
    };
    axios
      .post(
        "https://openmarketauth.herokuapp.com/api/v1/auth/password/forgot",
        password
      )
      .then(
        (response) => {
          console.log(response);
              window.location = "/succussfullysent";
              
              
        },
        (error) => {
          console.log(error);
        }
      );
  };
  emailChange = (event) => {
    this.setState({ email: event.target.value });
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
            <div className="col-md-5">
              <p>
                <img
                  src={require("../static/images/password.png")}
                  alt=""
                  className="open-market-password"
                />
              </p>
            </div>

            <div className="col-md-6">
              <Form onSubmit={this.handleChange}>
                <h4 id="heading-two">Seems Like you forgot your password</h4>
                <p>Send us your email to recieve a password reset link </p>
                <br></br>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-input"
                    name="email"
                    onChange={this.emailChange}
                    required={true}
                  />
                </Form.Group>

                <button type="submit" className="button">Get Link</button>
              </Form>
            </div>
          </div>
          <div className="md-col-1"></div>
        </div>
      </div>
    );
  }
}
