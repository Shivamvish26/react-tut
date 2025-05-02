import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  //get product details
  const getprodcutdetails = async (e) => {
    const token = localStorage.getItem("token");
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
    setDescription(result.description);
  };

  //   update product list
  const updateproduct = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, category, company, description }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.log(result);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Product Updated!",
        text: "Product has been updated successfully.",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      setName("");
      setPrice("");
      setCategory("");
      setCompany("");
      setDescription("");
      navigate("/product");
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

  useEffect(() => {
    console.log(params);
    getprodcutdetails();
  }, []);
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center vh-80 py-4">
          <Col md={12}>
            <div className="bg-white shadow-sm rounded-3 p-4">
              <h1>Update Product</h1>
              <Form onSubmit={updateproduct}>
                {/* <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder={auth?.userId ?? "User ID"}
                    className="no__focus"
                    disabled
                  />
                </Form.Group> */}
                <Form.Group className="mb-3">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product Name"
                    className="no__focus"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {/* {error && !name && (
                    <span className="text-danger">
                      Enter valid Product Name
                    </span>
                  )} */}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    className="no__focus"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Category"
                    className="no__focus"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company Name"
                    className="no__focus"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                    className="no__focus"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit" className="w-100 rounded-1 common__btn">
                  Update Product
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
