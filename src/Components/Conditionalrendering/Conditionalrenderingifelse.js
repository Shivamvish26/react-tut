import React, { useState } from "react";

export default function Conditionalrenderingifelse() {
  const [logged, setLogged] = useState(false);

  function handlestatuschange() {
    setLogged(true);
  }

//   if we have 3 conditional statements what can we do 1,2,3

  return (
    <div>
      {logged ? <h1>Welcome user</h1> : <h1>Welcome Guest</h1>}
      <button onClick={() => handlestatuschange(true)}>
        Click to Change Status
      </button>
    </div>
  );
}
