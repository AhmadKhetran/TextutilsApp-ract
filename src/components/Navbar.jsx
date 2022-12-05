import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                {props.first}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/About"
                className="nav-link active"
                aria-current="page"
                href="/"
              >
                {props.second}
              </Link>
            </li>
          </ul>
        </div>
        <button
          className={`btn btn-${props.btncolor} mx-1`}
          onClick={props.dmfun}
        >
          {props.btntext}
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title is missing",
  first: "value is missing",
  second: "value is missing",
};

//<About />
