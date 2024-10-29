// need to revision again of this

import React, { Component } from "react";

export default class Didupdate extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      name: "Shivam",
    };
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h1>Component Did Update {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "Shubham" });
          }}
        >
          Update function
        </button>
      </div>
    );
  }
}
