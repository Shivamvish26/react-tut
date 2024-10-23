import React, { useState } from "react";

export default function Formhandle() {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [check, setCheck] = useState(false);

  function getformdata(e) {
    e.preventDefault();
    console.log("Name:", name, "Option:", option, "Accepted Terms:", check);
    setName("");
    setOption("");
    setCheck(false);
  }

  return (
    <div>
      <h1>Form Listing</h1>
      <form onSubmit={getformdata}>
        <input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="">Select Option</option>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
        </select>
        <br /> <br />
        <input
          type="checkbox"
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
        />
        <span> Accept the terms and conditions</span>
        <br /> <br />
        <button type="submit">Submit Data</button>
      </form>
    </div>
  );
}
