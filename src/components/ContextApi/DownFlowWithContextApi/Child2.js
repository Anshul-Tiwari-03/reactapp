import React from "react";
import { Component } from "react";
import { MyContext } from "../contextApi2";
export default class Child2 extends Component{
    render(){
        return<>
        <br></br>
        <small>This is child2 component getting value of its count by Mycontext.Consumer </small>
        <MyContext.Consumer>
            {data => <b>{data}</b>
        }
        </MyContext.Consumer>
         
        
        </>
    }
}