import React, { useState } from "react";

export default function Hookusememoeffect() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  function multiCount() {
    console.log("multiCount")
    return count * 5;
  }

  return (
    <div>
      <h1>Hook Usememo Effect</h1>
      <h2>count : {count}</h2>
      <h2>count : {item}</h2>
      <h23>{multiCount()}</h23>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}
