import React, { Component } from "react";
import Student from "./Stduent";

export default class Willunmount extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        <h1>Component Will Unmount Life Cycle</h1>
        {this.state.show ? <Student /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Component
        </button>
      </div>
    );
  }
}
