import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

export default function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlesubmitform = (e) => {
    e.preventDefault();
    console.log("Name....", name);
    console.log("Email....", email);
    console.log("Password....", password);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Container className="full-height-center">
        <h2 className="text-center mb-4">Sign Up Page</h2>
        <Form className="w-50" onSubmit={handlesubmitform}>
          <FormControl
            type="text"
            placeholder="Enter Your Name"
            className="mb-3 w-100 shadow-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl
            type="email"
            placeholder="Enter Your Email"
            className="mb-3 w-100 shadow-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            type="password"
            placeholder="Enter Your Password"
            className="mb-3 w-100 shadow-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="w-100 common__btn rounded-pill">
            Signup
          </Button>
        </Form>
      </Container>
    </div>
  );
}
