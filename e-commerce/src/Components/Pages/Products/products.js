import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

export default function Product() {
  // staic data for product page
  const productData = [
    {
      userId: 1,
      name: "Iphone 16",
      price: 60000,
      category: "Mobile",
      company: "Apple",
      description: "lorem ipsum dolor",
    },
    {
      userId: 2,
      name: "Samsung S23",
      price: 60000,
      category: "Mobile",
      company: "Samsung",
      description: "lorem ipsum dolor",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products").then((result) => {
      result.json().then((resp) => {
        setData(resp);
        setLoading(false);
      });
    });
  }, []);

  return (
    <div>
      <Container className="py-4">
        <div className="p-5 bg-white shadow-sm rounded-3">
          <h1>Products Listing</h1>
          {loading ? (
            <p>Data Loading</p>
          ) : (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>{item.userId}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
