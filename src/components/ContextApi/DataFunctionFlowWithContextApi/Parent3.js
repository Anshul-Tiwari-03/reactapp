import React from "react";
import { Component } from "react";

import User2 from "./User2";
export default class Parent3 extends Component{
    render(){
        return<>
        <small>This is parent2 component not having any prop and not accessing it as well </small>
        <User2 />

        </>
    }
}