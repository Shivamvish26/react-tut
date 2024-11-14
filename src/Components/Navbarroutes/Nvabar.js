/* eslint-disable no-unused-vars */

import React from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ darkMode, toggleTheme }) {
  const navStyle = {
    backgroundColor: darkMode ? "#333333" : "#f8f9fa",
    color: darkMode ? "#ffffff" : "#000000", // White text in dark mode
    padding: "10px",
    textAlign: "right",
    transition: "background-color 0.3s, color 0.3s"
  };

  const buttonStyle = {
    backgroundColor: darkMode ? "#555555" : "#dddddd",
    color: darkMode ? "#ffffff" : "#000000",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer"
  };

  const linkStyle = {
    color: darkMode ? "#ffffff" : "#000000", // White text for NavLink in dark mode
    textDecoration: "none",
    margin: "0 10px",
    transition: "color 0.3s"
  };

  return (
    <div>
      <nav className="head__navbar shadow-lg p-1" style={navStyle}>
        <ul className="navbar__list" style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex", justifyContent: "flex-end" }}>
          <li>
            <NavLink className="navbar__links" to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/contact" style={linkStyle}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/service" style={linkStyle}>
              Service
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/hookuseparam/shubham" style={linkStyle}>
              Shubham
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__links" to="/hookuseparam/shivam" style={linkStyle}>
              Shivam
            </NavLink>
          </li>
          <li>
            <Button onClick={toggleTheme} style={buttonStyle}>
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </Button>
          </li>
          <li>
            <NavLink className="navbar__links" to="/login" style={linkStyle}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
