import React from "react";
import { Table } from "react-bootstrap";

export default function Mapfunction() {
  //   const students = ["Shubham", "Shivam", "Sanjay", "Saurabh"];

  const students = [
    {
      name: "Shubham",
      Email: "shubham@gmail.com",
      PhoneNo: 1234567890,
    },
    {
      name: "Saurabh",
      Email: "saurabh@gmail.com",
      PhoneNo: 1234567890,
    },
    {
      name: "Sanju",
      Email: "sanju@gmail.com",
      PhoneNo: 1234567890,
    },
    {
      name: "Nimish",
      Email: "nimish@gmail.com",
      PhoneNo: 1234567890,
    },
  ];

  return (
    <div>
      <h1>Map Function</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>SR No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone No</td>
          </tr>
        </thead>
        <tbody>
            {/* Filter for table */}
          {students.map((data, index) =>
            data.PhoneNo === 1234567890 ? (
              <tr key={index}>
                 <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.Email}</td>
                <td>{data.PhoneNo}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}
