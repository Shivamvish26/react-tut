import React, { Component } from "react";

export default class Constructorpropsupdate extends Component{
    render(){
        console.log("Render First",this.props)
        return (
            <div>
                <h1>Constructor Update from Props</h1>
            </div>
        )
    }
}