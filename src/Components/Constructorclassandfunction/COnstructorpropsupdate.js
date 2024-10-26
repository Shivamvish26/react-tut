import React, { Component } from "react";

export default class Constructorpropsupdate extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:"Shubham"
        }
    }
    render(){
        console.log("Render First",this.props)
        return (
            <div>
                <h1>Constructor Update from Props {this.props.name}</h1>
            </div>
        )
    }
}