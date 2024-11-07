import React from "react";
import Datauser from "./Datauser";


export default function Reusecomponent() {
  const data = [
    {
      name: "Shubham",
      email: "shubham@gmail.com",
      contact: 123456789,
    },
  ];

  return (
    <div>
      <h1>Resue Component in loop</h1>
     
      {
        data.map((item,i)=>
        <h1>
            <Datauser data={item}/>
        </h1>)
      }
    </div>
  );
}
