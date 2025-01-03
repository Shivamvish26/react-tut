
// Create a Functional Component
// Write a React functional component named Welcome that takes a name prop and displays:
// "Hello, [name]!"

import React from "react";

export default function Functionalcomponentprops(props){
    return(
        <div>
            <h1>Hello {props.name}</h1> 
        </div>
    )
}