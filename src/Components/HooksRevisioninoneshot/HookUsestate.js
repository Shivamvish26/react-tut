import React, { useState } from "react";

export default function HookUsestate() {
  const [counter, setCounter] = useState(0);
  const [name,setName] = useState("")

  function handleincrease() {
    setCounter(counter + 1);
  }

  function handledecrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="py-5">
      <h1>{name} has clicked the number : {counter} times!!!</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <div className="d-flex align-items-center justify-content-center ">
        <button className="mt-4 mr-4" onClick={handleincrease}>
          Click me increase the value
        </button>
        <button className="mt-4" onClick={handledecrement}>
          Click me increase the value
        </button>
      </div>
    </div>
  );
}
