import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Getapi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);

  return (
    <div>
      <h1>Get API</h1>
      <div>
        <Table striped>
          <thead>
            <tr>
              <td>User ID</td>
              <td>Title</td>``
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
