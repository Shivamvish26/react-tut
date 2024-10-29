import React, { useEffect, useState } from "react";

export default function HookuseEffect() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("useEffect Called")
  },[])

  return (
    <div>
      <h1>Hook useEffect {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
