import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
//import Api from "./kevin";

import "../signup.css";

const validEmailRegex = RegExp(
  /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i
);

// const validPasswordRegex = RegExp( /^[A-Za-z]w{2,5}$/);

export default class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    comfirmPassword: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      comfirmPassword: "",
    },
  };
  //  const [state, setState] = useState(false);
  handleSubmit = (event) => {
    event.preventDefault();
    const myUserData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      comfirmPassword: this.state.comfirmPassword,
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
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 3
            ? "Name  should atleast be 3 characters and above and it is required!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      // console.log(errors);
      this.setState({ errors, [name]: value });
    });
  };

  lastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "lastName":
        errors.lastName =
          value.length < 3
            ? "Name  should atleast be 3 characters and above and it is required!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      // console.log(errors);
      this.setState({ errors, [name]: value });
    });
  };

  emailChange = (event) => {
    this.setState({ email: event.target.value });
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Email Should be of a proper email format and it is required!";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      // console.log(errors);
      this.setState({ errors, [name]: value });
    });
  };
  passwordChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be 6 characters long and contain numbers e.g 123 and it is required!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      this.setState({ errors, [name]: value });
    });
    this.setState({ password: event.target.value });
  };
  // confirmPasswordChange = (event) => {
  //   const { name, value } = event.target;
  //   const message = "Failed";
  //   let errors = this.state.errors;
  //   switch (name) {
  //     case "comfirmPassword":
  //       //  errors.comfirmPassword =
  //       if (event.handleConfirmPassword !== event.handlePasswordChange) {
  //        console.log(message);
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  //   this.setState({ errors, [name]: value }, () => {
  //     this.setState({ errors, [name]: value });
  //   });
  //   this.setState({ password: event.target.value });
  // };

  render() {
    const { errors } = this.state;

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
                  <Form.Label>First Name </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    name="firstName"
                    // value={this.state.firstName}
                    required
                    onChange={this.firstNameChange}
                  />
                  {errors.firstName.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        // marginLeft: "15px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {errors.firstName}
                    </span>
                  )}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-input"
                    name="lastName"
                    required
                    onChange={this.lastNameChange}
                  />
                  {errors.lastName.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        // marginLeft: "15px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {errors.lastName}
                    </span>
                  )}
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
                  {errors.email.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        // marginLeft: "15px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {errors.email}
                    </span>
                  )}
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
                  {errors.password.length > 0 && (
                    <span
                      style={{
                        color: "red",
                        // marginLeft: "15px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {errors.password}
                    </span>
                  )}
                </Form.Group>

                {/* <Form.Group controlId="formBasicPassword">
                  <Form.Label>Comfirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="form-input"
                    name="comfirmPassword"
                    // value={this.state.password}
                    // required
                    onChange={this.confirmPasswordChange}
                  />
                  {/* {errors.comfirmPassword.length > 6 && (
                    <span
                      style={{
                        color: "red",
                        // marginLeft: "15px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {errors.comfirmPassword}
                    </span>
                  )} */}
                {/* </Form.Group> */}

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
