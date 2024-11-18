import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Deleteapi() {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Fetch API
  function getlist() {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
          setName(resp[0].name);
          setEmail(resp[0].email);
          setId(resp[0].id);
        });
      }
    );
  }

  function updateuser(id) {
    console.log(data[id - 1]);
    setName(data[id - 1].name);
    setEmail(data[id - 1].email);
    setId(data[id - 1].id);
  }

  // Delete API
  function handleuserdelete(id) {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getlist();
      });
    });
  }

  // Update Api
  function updateuserslist() {
    // console.warn(name, email, id);
    let item = { name, email, id };
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        getlist();
      });
    });
  }

  useEffect(() => {
    getlist();
  }, []);

  const containerStyle = {
    backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    padding: "20px",
    transition: "background-color 0.3s, color 0.3s",
  };

  const tableHeaderStyle = {
    backgroundColor: darkMode ? "#444444" : "#e0e0e0",
    color: darkMode ? "#ffffff" : "#000000",
  };

  const tableBodyStyle = {
    color: darkMode ? "#ffffff" : "#000000",
  };

  const buttonStyle = {
    marginBottom: "20px",
    backgroundColor: darkMode ? "#555555" : "#dddddd",
    color: darkMode ? "#ffffff" : "#000000",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1>Delete API</h1>
      <Button onClick={toggleTheme} style={buttonStyle}>
        {darkMode ? (
          <i class="bi bi-brightness-low-fill"></i>
        ) : (
          <i class="bi bi-brightness-low"></i>
        )}
      </Button>{" "}
      <div>
        <Table striped bordered hover>
          <thead>
            <tr style={tableHeaderStyle}>
              <td>User ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Operation</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} style={tableBodyStyle}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Button
                    className="btn btn-danger text-white mr-2"
                    onClick={() => handleuserdelete(item.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="btn btn-danger text-white"
                    onClick={() => updateuser(item.id)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* Prefilled Values */}
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            placeholder="Enter name"
            className="p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <input
            placeholder="Enter email"
            className="p-2 mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <Button className="btn btn-primary mt-2" onClick={updateuserslist}>
            Update User
          </Button>
        </form>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        theme="light"
        transition={Bounce}
      />
      </div>
    </div>
  );
}
