import React from "react";
import { Table } from "react-bootstrap";

export default function Nestedmapandnestedarray() {
  const data = [
    {
      name: "Shubham",
      email: "shubham@gmail.com",
    },
    {
      name: "Saurabh",
      email: "souabh@gmail.com",
    },
  ];

  return (
    <div>
      <h1>Nested Map and Nested Array</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

