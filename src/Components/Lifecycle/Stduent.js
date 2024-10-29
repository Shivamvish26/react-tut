import React, { Component } from "react";

export default class Student extends Component {
    componentWillUnmount(){
        alert("Componrnt Will Unmount call")
    }
  render() {
    return (
      <div>
        <h1>Student Compoent</h1>
      </div>
    );
  }
}
