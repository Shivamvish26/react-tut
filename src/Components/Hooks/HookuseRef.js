import React, { useRef } from "react";

export default function HookuseRef() {
  let inputRef = useRef(null);

  function handleinputref() {
    alert("Function Called");
    inputRef.current.value = "1000";
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Hook useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={() => handleinputref()}>Handle Input</button>
    </div>
  );
}
