import React from "react";
import { Button, Table } from "react-bootstrap";

export default function Datauser(props) {
  const alertName = () => {
    alert(`Name : ${props.data.name}`);
  };

  return (
    <div>
      <Table variant="dark" striped>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.data.name}</td>
            <td>{props.data.email}</td>
            <td>{props.data.contact}</td>
          </tr>
        </tbody>
      </Table>

      <Button className="btn btn-primary" onClick={alertName}>
        Alert Name
      </Button>
    </div>
  );
}
