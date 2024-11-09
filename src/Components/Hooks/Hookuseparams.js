import React from "react";
import { useParams } from "react-router-dom";

export default function Hookuseparams(){
    
    const {name} = useParams();
    console.log(name)

    return(
        <div>
            <h1>This is {name} user.</h1>
        </div>
    )
}