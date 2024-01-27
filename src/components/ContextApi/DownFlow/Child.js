import React from "react";
import { Component } from "react";
export default class Child extends Component{
    render(){
        return<>
        <br></br>
        <small>
        This is child component getting value of its count : <b>{this.props.count}</b>
        </small>
        
        </>
    }
}