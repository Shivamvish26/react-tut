import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Input, Button, Checkbox } from "antd";
import signup from "../Assests/Images/signup.webp";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const formRef = React.createRef();

  const onFinish = (values) => {
    console.log("Success:", values);

    formRef.current.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
      className="d-flex align-items-center"
    >
      <Container>
        <Row
          className="align-items-stretch shadow overflow-hidden rounded"
          style={{ minHeight: "80vh" }}
        >
          {/* Left Column: Image */}
          <Col md={6} className="d-none d-md-block p-0">
            <img 
              src={signup}
              alt="Login Visual"
              className="img-fluid w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </Col>

          {/* Right Column: Form */}
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center bg-white"
          >
            <div className="p-4 w-100" style={{ maxWidth: "400px" }}>
              <h3 className="mb-4 text-center">Login</h3>

              <Form
                ref={formRef}
                name="loginForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
                layout="vertical"
                initialValues={{ remember: false }}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </Form.Item>

                {/* Checkbox for terms and conditions */}
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject("Please accept the terms and conditions!"),
                    },
                  ]}
                >
                  <Checkbox 
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  >
                    Accept Terms & Conditions
                  </Checkbox> 
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
