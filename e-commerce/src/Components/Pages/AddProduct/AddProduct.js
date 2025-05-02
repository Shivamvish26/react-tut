import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleaddproduct = async (e) => {
    e.preventDefault();

    if (!name) {
      setError(true);
      return;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const token = localStorage.getItem("token");
    try {
      let result = await fetch("http://localhost:5000/add-product", {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          category,
          company,
          description,
          userId,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "Product Added!",
        text: "Product has been added successfully.",
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
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Try Again",
        text: "Something went Wrong, Please try again",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      setName("");
      setPrice("");
      setCategory("");
      setCompany("");
      setDescription("");
    }
  };

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center vh-80 py-4">
          <Col md={12}>
            <div className="bg-white shadow-sm rounded-3 p-4">
              <h1>Add Product</h1>
              <Form onSubmit={handleaddproduct}>
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
                  Add Product
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
