import React, { useState } from "react";

export default function Hideshow() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? <h1>Hide</h1> : null}

      {/*Hiding and Showing the data on two buttons */}

      {/* <button onClick={() => setShow(false)}>Hide</button>
      <button onClick={() => setShow(true)}>Show</button> */}

      {/*Hiding and Showing the data on single buttons */}
      <button onClick={() => setShow(!show)}>
        {!show ? "Read More" : "Hide Up"}
      </button>
    </div>
  );
}
