import React, { useState } from "react";

export default function Inputfields() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function getdata(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <div>
      <h1>Get Your Input Fields</h1>
      <h2>{print ? data : null}</h2>
      <input type="text" onChange={getdata} />
      <button onClick={() => setPrint(true)}>Print Text</button>
    </div>
  );
}
