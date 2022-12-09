import React from "react";
import img1 from "../logo.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      {/* Navbar Component */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span>Yours Kitchen</span>
          </a>
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
              <button className="signupBtn">Sign up</button>
            </Link>
            <Link to="/Signin">
              <button className="signinBtn">Sign in</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
