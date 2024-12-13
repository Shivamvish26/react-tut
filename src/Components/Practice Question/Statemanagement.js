// Create a Counter component with the following features:
// A button to increment the count.
// A button to decrement the count.
// Display the current count value.
// Initial count = 0.

import React, { useState } from "react";

export default function Statemanagament() {
  const [count, Setcount] = useState(0);

  function increment() {
    Setcount(count + 1);
  }

  function decrement() {
    Setcount(count - 1);
  }

  return (
    <div>
      <h1>State Managament using States</h1>
      <h2> You have clicked {count} numbers of times.</h2>
      <button onClick={increment} style={{ margin: 10 }}>
        CLick Me
      </button>
      <button onClick={decrement}>CLick Me</button>
    </div>
  );
}
