import React, { Component } from "react";
import ChildComponentWithoutStateChange from "./childComponetWithoutStateChange";
class ParentComponentWithouStateChange extends Component{
    constructor(props){
        super(props);
        // console.log("constructor called");
        this.state={
            name:"Joi",
            count:10
        }
    }
    increment=()=>{
        let count2=this.state.count+1;
        // console.log("Button clicked");
        this.setState({count :count2})
    }
    decrement=()=>{
        let count2=this.state.count-1;
        // console.log("Button clicked");
        this.setState({count :count2})
    }
    render(){
        return<>
        <div class="card alert-primary">
            <div class="card-body">
                <h3><u>Parent Child Without State Change</u></h3>
                <br></br>
                <h3>This is the parent Component</h3>
                <span>Hello : &nbsp;<b>{this.state.name} <br></br></b> This is your counter</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement} style={{backgroundColor:"red",color:"white",fontSize:"20px",padding:"0px 10px"}}>&nbsp;-&nbsp;</button>
                <span style={{width:"200px",padding:"20px"}}>{this.state.count}</span>
                <button onClick={this.increment} style={{backgroundColor:"green",color:"white",fontSize:"20px",padding:"0px 10px"}}>&nbsp;+&nbsp;</button>
                
                <br></br>
                <hr></hr>
                <ChildComponentWithoutStateChange count={this.state.count}/>
                
            </div>
        </div>
        </>

    }
}
export default ParentComponentWithouStateChange;