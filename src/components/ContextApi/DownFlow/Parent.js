import React from "react";
import { Component } from "react";
import User from "./User";
export default class Parent extends Component{
    render(){
        return<>
        <br></br>
        <small>       This is parent component having value for child : <b>{this.props.count}</b></small>
        <User count={this.props.count}/>

        </>
    }
}