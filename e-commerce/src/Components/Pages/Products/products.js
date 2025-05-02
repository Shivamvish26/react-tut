import React, { useEffect, useState } from "react";
import { Button, Container, FormGroup, Table } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const deleteproduct = async (id) => {
    const token = localStorage.getItem("token");
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Product Deleted!",
        text: "Product has been deleted successfully.",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      setData(data.filter((item) => item.id !== id));
      window.location.reload(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Try Again",
        text: "Something went Wrong, Please try again",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  const searchandle = async (e) => {
    let key = e.target.value;
    const token = localStorage.getItem("token");

    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if (result) {
        setData(result);
      }
    } else {
      setLoading(true);
      fetch("http://localhost:5000/products", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then((result) => {
        result.json().then((resp) => {
          setData(resp);
          setLoading(false);
        });
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((result) => {
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
          <FormGroup className="mb-3">
            <input
              type="text"
              placeholder="Search Product by Name or Category"
              className="form-control no__focus"
              onChange={searchandle}
            />
          </FormGroup>

          {loading ? (
            <p>Data Loading</p>
          ) : (
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>{item.category}</td>
                          <td>{item.description}</td>
                          <td>
                            <Button
                              className="btn common__btn me-2"
                              onClick={() => deleteproduct(item._id)}
                            >
                              Delete
                            </Button>
                            <Link
                              to={"/updateproduct/" + item._id}
                              className="btn common__btn text-white"
                            >
                              Update
                            </Link>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <h3 className="mt-3">No Data Found</h3>
                  )}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
