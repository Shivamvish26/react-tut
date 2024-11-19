import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Prviousfunction() {
  const [count, setCount] = useState(1);

  function updatecounter() {
    // let rand = Math.floor(Math.random() * 10);
    // setCount((prev) => {
    //   console.log(prev);
    //   if (prev > 5) {
    //     alert("Higest Value");
    //   } else {
    //     return rand;
    //   }
    // });

    for (let i=0; i<5; i++){
        setCount((prev) => prev + 1);
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={updatecounter}>Click me to update Counter</Button>
    </div>
  );
}
