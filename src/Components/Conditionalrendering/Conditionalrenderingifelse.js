import React, { useState } from "react";

export default function Conditionalrenderingifelse() {
  const [logged, setLogged] = useState(false);

  function handlestatuschange() {
    setLogged(true);
  }

  return (
    <div>
      {logged ? <h1>Welcome user 1</h1> : <h1>Welcome Guest</h1>}

      {/* if we have 3 conditional statements what can we do like 1,2 & 3
      we can use if else if else statement in react like this, this is called ternary operator.
      Ternary Operator is a simplifed conditional operator of if/else.
      
      {logged ? <h1>Welcome user 1</h1> : logged ? <h1>Welcome user 2</h1> : <h1>Welcome Guest</h1>} */}

      <button onClick={() => handlestatuschange(true)}>
        Click to Change Status
      </button>
    </div>
  );
}
