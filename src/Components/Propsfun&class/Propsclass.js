import React, { Component } from "react";

export default class Propsclass extends Component{
    render(){
        return(
            <div>
                <h1>Prop Class {this.props.name}</h1>
            </div>
        )
    }
}