import React, { Component } from "react";

export default class Didmount extends Component {
  constructor() {
    super();
    this.state={
      name:"name"
    }
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Component Did Mount Lifecycle {this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"Shivam"})}}>Update Name</button>
      </div>
    );
  }
}
