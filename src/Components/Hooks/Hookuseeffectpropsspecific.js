/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from "react";

export default function Hookuseeffectpropsspecific(pros) {
  useEffect(() => {
    alert("useEffect called Count data" + pros.count);
  }, [pros.count]);

  return (
    <div>
      <h1>UseEffect State Update : {pros.count}</h1>
      <h1>UseEffect State Update : {pros.data}</h1>
    </div>
  );
}
