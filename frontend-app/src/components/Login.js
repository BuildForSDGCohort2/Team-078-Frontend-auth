import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "../login.css";

function Login() {
    let url = "/";
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" id="navbar-style">
        <Navbar.Brand href={url}>
          <img
            src={require("../static/images/nav-log.png")}
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
            <Nav.Link href="#">JOIN | SIGN IN</Nav.Link>
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

          <div className="col-md-5" >
            <Form>
              <h2 id="heading-two">Welcome Back</h2>
              <p>
                Don't have an account?{" "}
                <a href={url} className="form-link">
                  create an account
                </a>{" "}
              </p>
              
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" className="form-input" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="form-input" />
              </Form.Group>
             <p className="forgot-password">Forgot Password?</p>

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

export default Login;
