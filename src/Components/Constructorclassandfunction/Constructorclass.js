import React, { Component } from "react";

export default class Constructorclass extends Component {

    constructor(){
        super();
        this.state={
            data:"Shubham"
        }
    }

  render() {
    return <div><h1>{this.state.data}</h1></div>;
  }
}

// In this above code first the constructor is called first then render function.
// The constructor is a special method that is called when an object is created from a class and is
// used to initialize the properties of the class.
// A constructor is a lifecycle
// Do not call api's in constructor.