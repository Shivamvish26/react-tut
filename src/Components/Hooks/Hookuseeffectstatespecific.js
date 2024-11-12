/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from "react";
import Hookuseeffectpropsspecific from "./Hookuseeffectpropsspecific";

export default function Hookuseeffectstatespecific() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  return (
    <div>
      <Hookuseeffectpropsspecific count={count} data={data}/>
      <button onClick={() => setCount(count + 1)}>Update Count</button> <br />
      <br />
      <button onClick={() => setData(data + 1)}>Update Data Count</button>
    </div>
  );
}
 