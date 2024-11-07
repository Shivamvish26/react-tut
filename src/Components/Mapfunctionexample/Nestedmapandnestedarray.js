import React from "react";
import { Table } from "react-bootstrap";

export default function Nestedmapandnestedarray() {
  const data = [
    {
      name: "Shubham",
      email: "shubham@gmail.com",
      address: [
        {
          street: "123, ABC street",
          city: "New York",
          country: "US",
        },
        {
          street: "123, ABC street",
          city: "Pune",
          country: "India",
        },
        {
          street: "123, ABC street",
          city: "Mumbai",
          country: "India",
        },
      ],
    },
    {
      name: "Saurabh",
      email: "souabh@gmail.com",
      address: [
        {
          street: "ABC street",
          city: "New York",
          country: "US",
        },
        {
          street: "1ABC",
          city: "Pune",
          country: "India",
        },
        {
          street: "street",
          city: "Mumbai",
          country: "India",
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Nested Map and Nested Array</h1>
      <Table striped variant="dark">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Table variant="dark" striped>
                  <tbody>
                    {item.address.map((adad) => (
                      <tr>
                        <td>{adad.street}</td>
                        <td>{adad.city}</td>
                        <td>{adad.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
