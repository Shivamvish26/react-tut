import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa"; // FontAwesome Icons
import logo from "../Assests/Images/logo.png";

export default function Header({ darkMode, toggleTheme }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navStyle = {
    backgroundColor: darkMode ? "#333333" : "#f8f9fa",
    color: darkMode ? "#ffffff" : "#000000",
    transition: "background-color 0.3s, color 0.3s",
  };

  const linkStyle = {
    color: darkMode ? "#ffffff" : "#000000",
    textDecoration: "none",
    margin: "0 10px",
    transition: "color 0.3s",
  };

  const iconStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: darkMode ? "#ffffff" : "#000000",
    transition: "color 0.3s",
  };

  const logoStyle = {
    filter: darkMode ? "invert(1) brightness(2)" : "none",
    transition: "filter 0.3s",
  };

  return (
    <Navbar expand={false} className="mb-3 shadow" style={navStyle}>
      <Container>
        <Link
          to="/"
          className="d-flex align-items-center text-decoration-none"
          style={linkStyle}
        >
          <img
            src={logo}
            width={30}
            height={30}
            alt="E-Commerce Logo"
            className="img-fluid d-inline-block align-top me-2"
            style={logoStyle}
          />
          <span>E-Commerce</span>
        </Link>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-0 navbar__toggleicon"
          onClick={handleShow}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              E-Commerce
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link
                to="/"
                className="nav-link text-dark"
                style={linkStyle}
                onClick={handleClose}
              >
                Home
              </Link>
              <Link
                to="/product"
                className="nav-link text-dark"
                style={linkStyle}
                onClick={handleClose}
              >
                Product
              </Link>
              <Link
                to="/updateproduct"
                className="nav-link text-dark"
                style={linkStyle}
                onClick={handleClose}
              >
                Update Product
              </Link>
              <Link
                to="/addproduct"
                className="nav-link text-dark"
                style={linkStyle}
                onClick={handleClose}
              >
                Add Product
              </Link>
              <Link
                to="/logout"
                className="nav-link text-dark"
                style={linkStyle}
                onClick={handleClose}
              >
                Logout
              </Link>
              <Link
                to="/signup"
                className="nav-link text-dark"
                style={linkStyle}
                onClick={handleClose}
              >
                Sign Up
              </Link>
              <Link
                to="/profile"
                className="nav-link text-dark"
                style={linkStyle}
                onClick={handleClose}
              >
                Profile
              </Link>
              <div
                onClick={toggleTheme}
                className="nav-link text-dark"
                style={linkStyle}
              >
                {darkMode ? (
                  <FaSun
                    style={iconStyle}
                    title="Switch to Light Mode"
                    className="text-dark"
                    onClick={handleClose}
                  />
                ) : (
                  <FaMoon
                    style={iconStyle}
                    title="Switch to Dark Mode"
                    className="text-dark"
                    onClick={handleClose}
                  />
                )}
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
