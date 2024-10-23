import React, { useState } from "react";

export default function Checkbox() {
  const [ischeck, setIscheck] = useState();

  function getcheckvalue(e) {
    console.log("----------------", e.target.checked);
    setIscheck(e.target.checked);
  }

  return (
    <div>
      <h1>This is Check box</h1>
      <input type="checkbox" checked={ischeck} onChange={getcheckvalue} />
      <p>{ischeck ? "Check-boxed is click" : "Check-boxed is not click"}</p>
    </div>
  );
}
