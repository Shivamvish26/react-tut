import React, { useEffect, useState } from "react";

export default function HookUseEffect() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(5);

  function handleincrease() {
    setCount(count + 1);
  }

  //   useEffect with dependencies
  //   useEffect(()=>{
  //     document.title = `${count} new message!`
  //   })

  //   ==================================================

  //   useEffect with empty array
  //   useEffect(() => {
  //     document.title = `${count} new message`;
  //   }, []);

  // ===================================================

  // useEffect with variables
  useEffect(() => {
    document.title = `${counter} new message`;
  }, [counter]);

  return (
    <div className="py-5">
      <h1> {count} times!!!</h1>
      <div className="d-flex align-items-center justify-content-center ">
        <button className="mt-4 mr-4" onClick={handleincrease}>
          Click me
        </button>
      </div>
      {/* useEffect with variables */}
      <h1 className="mt-3"> {counter} times!!!</h1>
      <div className="d-flex align-items-center justify-content-center ">
        <button className="mt-4 mr-4" onClick={() => setCounter(counter + 5)}>
          Click me
        </button>
      </div>
    </div>
  );
}
