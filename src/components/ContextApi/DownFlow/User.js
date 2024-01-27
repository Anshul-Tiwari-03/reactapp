import React from "react";
import { Component } from "react";
import Child from "./Child";
export default class User extends Component{
    render(){
        return<>
        <br></br>
        <small>This is user component having value for child :<b> {this.props.count}</b></small>
        <Child count={this.props.count}/>
        
        </>
    }
}