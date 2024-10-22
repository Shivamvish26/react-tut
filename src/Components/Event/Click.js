// OnClick Event in React JS

import React from "react";

export default function Click(){

    let data = "Shubham"

    function Apple(){
        alert(data);
    }

    return(
        <div>
            <h1>Hello </h1>
            <button onClick={Apple}>Click Me</button>
        </div>
    )
}