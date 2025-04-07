import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import moment from "moment";

export default function Getapioneshot() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setLoading(false);
      });
    });
  }, []);
  console.log("result", data);

  return (
    <div>
      <h1>Get API</h1>
      <div style={{ margin: "20px" }}>
        {loading ? (
          <p>Data Loading...</p>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>id</td>
                  <td>Title</td>
                  <td>Price</td>
                  <td>Updated At</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{moment(item.updatedAt).format("DD-MM-YYYY")}</td>
                    <td style={{ textAlign: "justify" }}>
                      {item.description.slice(0, 100)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
