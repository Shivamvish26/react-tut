import React, { useState } from "react";

export default function Formvalidation() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!userError && !passwordError) {
      console.log(user, password);
      setUser("");
      setPassword("");
    } else {
      alert("Please fix the errors before submitting");
    }
  }

  function handleUser(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserError(true);
    } else {
      setUserError(false);
    }
    setUser(item);
  }

  function handlePass(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(item);
  }

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={user}
          onChange={handleUser}
        />
        <span>{userError ? "Enter valid name (min 3 characters)" : ""}</span>
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePass}
        />
        <span>
          {passwordError ? "Enter valid password (min 8 characters)" : ""}
        </span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
