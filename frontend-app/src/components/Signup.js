import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";


import "../signup.css";

function Signup() {
     //const [state, setState] = useState(false);
     let url = "/login";
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" id="navbar-style" >
        <Navbar.Brand href="#home">
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
                src={require("../static/images/signup.png")}
                alt=""
                className="open-market"
              />
            </p>
          </div>

          <div className="col-md-5">
            <Form>
              <h2 id="heading-two">Get Started</h2>
              <p>
                Already have an account?{" "}
                <a href={url} className="form-link">
                  sign in
                </a>{" "}
              </p>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" className="form-input" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" className="form-input" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" className="form-input" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Comfirm Password</Form.Label>
                <Form.Control type="password" className="form-input" />
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

export default Signup;
