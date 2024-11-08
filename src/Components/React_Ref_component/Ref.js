import React, { Component, createRef } from "react";

export default class Ref extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    // console.warn(this.inputRef.current.value="1000");
  }

  getvalues(){
        console.warn(this.inputRef.current.value);
        this.inputRef.current.style.color="red"
  }

  render() {
    return (
      <div>
        <h1>Ref in React</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getvalues()}>Check Ref</button>
      </div>
    );
  }
}
