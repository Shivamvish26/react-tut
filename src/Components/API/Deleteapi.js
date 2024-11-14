import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

export default function Deleteapi() {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

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

  function getlist() {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      }
    );
  }

  useEffect(() => {
    getlist();
  }, []);

  const containerStyle = {
    backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    padding: "20px",
    transition: "background-color 0.3s, color 0.3s"
  };

  const tableHeaderStyle = {
    backgroundColor: darkMode ? "#444444" : "#e0e0e0",
    color: darkMode ? "#ffffff" : "#000000"
  };

  const tableBodyStyle = {
    color: darkMode ? "#ffffff" : "#000000"
  };

  const buttonStyle = {
    marginBottom: "20px",
    backgroundColor: darkMode ? "#555555" : "#dddddd",
    color: darkMode ? "#ffffff" : "#000000",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h1>Get API</h1>
      <Button onClick={toggleTheme} style={buttonStyle}>
         {darkMode ? <i class="bi bi-brightness-low-fill"></i> : <i class="bi bi-brightness-low"></i> } 
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
                    className="btn btn-danger text-white"
                    onClick={() => handleuserdelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
