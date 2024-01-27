import React from "react";
import { Component } from "react";
import Child2 from "./Child2";

export default class User2 extends Component{
    render(){
        return<>
        <br></br>
        <small>This is user2 component not having value for child </small>
        <Child2/>
        
        </>
    }
}