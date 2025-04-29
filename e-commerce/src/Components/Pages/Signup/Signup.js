import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import google from "../Assests/Images/google.svg";
import microsoft from "../Assests/Images/microsoft.svg";
import { toast } from "react-toastify";
import login from "../Assests/Images/login.webp";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [acceptterms, setAccepttrems] = useState(false);
  const navigate = useNavigate();

  const handleformsubmit = async (e) => {
    e.preventDefault();
    // if (!acceptterms) {
    //   toast.error("Please accept the terms and conditions");
    //   return;
    // }
    try {
      let result = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      toast.success("Registration successful!");
      setEmail("");
      setPassword("");
      setAccepttrems(false);
      // localStorage.setItem("user", JSON.stringify(result));
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
      setEmail("");
      setPassword("");
      setAccepttrems(false);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/login");
    }
  });

  return (
    <Container>
      <div className="py-4">
        <Row className="d-flex justify-content-center align-items-center vh-80 bg-white shadow-sm rounded-3">
          {/* <Col md={8}>
            <img
              src={login}
              alt="signup"
              style={{ width: "100%", height: "auto" }}
            />
          </Col> */}
          <Col md={12} className="p-5">
            <div>
              <h3 className="text-center login__title">Sign Up</h3>
            </div>
            <Form onSubmit={handleformsubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="no__focus"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="no__focus"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showpassword ? "text" : "password"}
                  placeholder="Password"
                  className="no__focus"
                  required
                  maxLength={10}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Group className="" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    className=""
                    label="Show Password"
                    checked={showpassword}
                    onChange={(e) => setShowpassword(e.target.checked)}
                  />
                </Form.Group>
                <Link to="/login" className="text-decoration-none text-dark">
                  Already have an account? Login
                </Link>
              </div>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  className=""
                  label="I have read and accepted the privacy policies and terms of services."
                  checked={acceptterms}
                  onChange={(e) => setAccepttrems(e.target.checked)}
                />
              </Form.Group> */}
              <Button type="submit" className="w-100 rounded-1 common__btn">
                Register
              </Button>
            </Form>
            {/* <div className="horizontal__line"></div>
            <div className="mt-3 d-flex gap-2">
              <div
                className="flex-fill d-flex align-items-center border rounded px-3 py-2 shadow-sm bg-white"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={google}
                  alt="Login with Google"
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                />
                <span className="text-muted m-0" style={{ fontSize: "12px" }}>
                  Login with Google
                </span>
              </div>

              <div
                className="flex-fill d-flex align-items-center border rounded px-3 py-2 shadow-sm bg-white"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={microsoft}
                  alt="Login with Microsoft"
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                />
                <span className="text-muted m-0" style={{ fontSize: "12px" }}>
                  Login with Microsoft
                </span>
              </div>
            </div> */}
          </Col>
        </Row>
      </div>
    </Container>
  );
}
