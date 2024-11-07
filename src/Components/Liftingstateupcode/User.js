import React from "react";
import { Button } from "react-bootstrap";

// check the app.js file for the props data
// Revision once again chapter no 37

export default function Users(props) {
  return (
    <div>
      <h1>User Name : {props.name}</h1>
      <Button className="btn btn-primary">Lifting State Up</Button>
    </div>
  );
}
