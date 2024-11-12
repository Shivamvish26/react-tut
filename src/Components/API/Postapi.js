import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Postapi() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Response from API:", data);

    setResponse("Form Submitted Successfully");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form
        className="w-50"
        onSubmit={handleSubmitForm}
        style={{ textAlign: "left" }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        {response && <p className="mt-3 text-success">{response}</p>}
      </Form>
    </div>
  );
}
