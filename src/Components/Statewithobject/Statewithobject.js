import React, { useState } from "react";

export default function Statewithobject() {
  const [data, setData] = useState({ name: "Shubham", age: 20 });

  return (
    <div>
      <h1>State with object</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={data.name}
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter Name"
        value={data.age}
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      />

      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </div>
  );
}
