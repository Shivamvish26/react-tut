// state in Function component

import React, { useState } from "react";

export default function Hookusestate() {
  // const [name, setname] = useState("Yadhav");
  const [name, setname] = useState(0);

  //Need to increment the numer just add usesate as ("0") refer line no 5 and set the data as (previous data means name + 1) refer line number 10

  function updateState() {
    // setname("Vishwakarma");
    setname(name + 1);
  }

  function decrementState() {
    setname(name - 1);
  }

  console.warn("________________");

  return (
    <div>
      <h1>Shubham {name}</h1>
      <div>
        <button onClick={updateState} style={{ marginRight: "10px" }}>
          Increment
        </button>
        <button onClick={decrementState}>Decrement</button>
      </div>
    </div>
  );
}

// In React, you can't directly use a var to update data because it doesn't notify
// the component when the data changes, leading to inconsistent rendering; instead, you use the
// "state" mechanism (typically accessed through the useState hook) to update data, as it triggers a
// re-render whenever the state is modified.
