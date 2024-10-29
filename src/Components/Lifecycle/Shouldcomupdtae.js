import React, { Component } from "react";

class Shouldcomupdtae extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return nextState.counter < 5;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
    console.log(
      `Previous counter: ${prevState.counter}, New counter: ${this.state.counter}`
    );
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    console.log("Render called");
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    );
  }
}

export default Shouldcomupdtae;
