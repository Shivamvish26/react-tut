import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assests/Images/logo.png";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" expand={false} className="mb-3 shadow">
      <Container>
        <Link
          to="/"
          className="d-flex align-items-center text-decoration-none text-dark"
        >
          <img
            src={logo}
            width={30}
            height={30}
            alt="E-Commerce Logo"
            className="img-fluid d-inline-block align-top me-2"
          />
          <span>E-Commerce</span>
        </Link>

        <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0 navbar__toggleicon" onClick={handleShow} />
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
              <Link to="/" className="nav-link" onClick={handleClose}>
                Home
              </Link>
              <Link to="/updateproduct" className="nav-link" onClick={handleClose}>
                Update Product
              </Link>
              <Link to="/addproduct" className="nav-link" onClick={handleClose}>
                Add Product
              </Link>
              <Link to="/register" className="nav-link" onClick={handleClose}>
                Register
              </Link>
              <Link to="/login" className="nav-link" onClick={handleClose}>
                Login
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
