import React from "react";
import { Component } from "react";
import { MyContext2 } from "../contextApi2";
export default class Child2 extends Component{
    render(){
        return<>
        <br></br>

        <small>This is child2 component getting value of its count by Mycontext.Consumer :</small>
        <MyContext2.Consumer>
            {({data,handleCLick })=> <span>
                <b>{data.count}</b> &nbsp;
                <button onClick={handleCLick}> + </button>
                </span>
        }
        </MyContext2.Consumer>
         
        
        </>
    }
}