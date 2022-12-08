import React from "react";
import img1 from "../logo.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Yours Kitchen
          </a>
          {/* <Link to="/">Yours Kitchen</Link> |{" "} */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <img className="logo" src={img1} alt="logo" />{" "}
                </a>
              </li>
            </ul>

            <Link to="/Signup">
              <span className="navbar-text">
                <a href="/signin" className="signupBtn">
                  Sign up
                </a>
              </span>
            </Link>
            <Link to="/Signin">
              <span className="navbar-text">
                <a href="/signin" className="signinBtn">
                  Sign in
                </a>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
