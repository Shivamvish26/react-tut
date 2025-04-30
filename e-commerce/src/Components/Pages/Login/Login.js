import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import google from "../Assests/Images/google.svg";
import microsoft from "../Assests/Images/microsoft.svg";
import { toast } from "react-toastify";
import login from "../Assests/Images/login.webp";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [acceptterms, setAccepttrems] = useState(false);
  const navigate = useNavigate();

  const handleformlogin = async (e) => {
    e.preventDefault();
    if (!acceptterms) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    try {
      let response = await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast.error("Server Error. Please try again later.");
        return;
      }

      const result = await response.json();
      console.log(result);

      if (result.status === "ok") {
        toast.success("Login successful");
        setEmail("");
        setPassword("");
        setAccepttrems(false);
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/addproduct");
      } else if (result.status === "error") {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
      setEmail("");
      setPassword("");
      setAccepttrems(false);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/addproduct");
    }
  }, []);

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
              <h3 className="text-center login__title">Login</h3>
            </div>
            <Form onSubmit={handleformlogin}>
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
                <Link to="/signup" className="text-decoration-none text-dark">
                  Don't have an account? Sign Up
                </Link>
              </div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  className=""
                  label="I have read and accepted the privacy policies and terms of services."
                  checked={acceptterms}
                  onChange={(e) => setAccepttrems(e.target.checked)}
                />
              </Form.Group>
              <Button type="submit" className="w-100 rounded-1 common__btn">
                Login
              </Button>
            </Form>
            <div className="horizontal__line"></div>
            <div className="mt-3 d-flex gap-2">
              <div
                className="flex-fill d-flex align-items-center border rounded px-3 py-2 shadow-sm bg-white"
                style={{ cursor: "pointer" }}
                onClick={() => alert("Google login Coming Soon..")}
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
                onClick={() => alert("Microsoft login Coming Soon..")}
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
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
