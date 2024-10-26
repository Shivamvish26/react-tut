import React from "react";

export default function Propsasfunction(props) {
  return (
    <div>
      <h1>Function As Props</h1>
      <button onClick={()=>props.data()}>Click to call data</button>
    </div>
  );
}
