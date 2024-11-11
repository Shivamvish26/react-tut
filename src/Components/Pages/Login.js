import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });

  return (
    // Protected route for login.
    // see protected file
    <div>
      <h2>Login</h2>
      <div>
        <input type="text" />
        <br />
        <br />
        <input type="tex" />
        <br />
        <br />
        <button className="btn btn-primary" onClick={login}>
          {" "}
          Login{" "}
        </button>
      </div>
    </div>
  );
}
