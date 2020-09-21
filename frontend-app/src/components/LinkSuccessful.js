import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../login.css";

export default class LinkSuccessful extends Component {
  state = {
    email: "",
    
  };

  handleChange = (event) => {
    event.preventDefault();
    const resend = {
      email: this.state.email,
    };
    axios
      .get(
        "https://openmarketauth.herokuapp.com/api/v1/auth/verification/resend",
        resend
      )
      .then(
        (response) => {
          console.log(response);
          //   window.location = "/";
          alert("submited");
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
              
              {/* <Nav.Link>
                <button type="submit" className="sell-button">
                  SELL
                </button>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <p>
                <img
                  src={require("../static/images/succes-icon.png")}
                  alt=""
                  className="open-market-sent"
                />
              </p>
            </div>

            <div className="col-md-6">
              <Form onSubmit={this.handleChange}>
                <h4 id="heading-two">Link was sent successfully Please check your email</h4>
                <p>If you are yet to recieve the Link...</p>
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
                <button type="submit" className="button">
                  Resend link
                </button>
              </Form>
            </div>
          </div>
          <div className="md-col-1"></div>
        </div>
      </div>
    );
  }
}
