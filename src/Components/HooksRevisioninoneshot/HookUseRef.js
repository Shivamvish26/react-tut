import React, { useEffect, useRef, useState } from "react";

export default function HookUseRef() {
  //   const [name, setName] = useState("");
  //   const count = useRef(0);
  //   useEffect(() => {
  //     count.current = count.current + 1;
  //   });
  //     console.log(count);
  //   function handleRestart() {
  //     setName("");
  //     count.current = 0;
  //   }
  const inputEle = useRef();
  const handleClick = () => {
    console.log(inputEle);
    inputEle.current.style.width = "300px";
    inputEle.current.focus();
  };

  return (
    <div>
      {/* <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>name:{name}</h2>
      <h3>Render : {count.current}</h3>
      <button onClick={handleRestart}>Click me</button> */}
      <input type="text" ref={inputEle}/>
      <br/>
      <br/>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
