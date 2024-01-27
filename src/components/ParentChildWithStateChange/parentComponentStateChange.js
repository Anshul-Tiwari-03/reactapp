import React, { Component } from "react";
import ChildComponentStateChange from "./childComponetStateChange";
class ParentComponentStateChange extends Component{
    constructor(props){
        super(props);
        // console.log("constructor called");
        this.state={
            name:"Joi",
            mcount:10
        }
    }
    increment=()=>{
        let count2=this.state.mcount+1;
        // console.log("Button clicked");
        this.setState({mcount :count2})
    }
    decrement=()=>{
        let count2=this.state.mcount-1;
        // console.log("Button clicked");
        this.setState({mcount :count2})
    }
    
    render(){
        return<>
        <div class="card alert-warning">
            <div class="card-body">
                <h3><u>Parent Child State Change</u></h3>
                <br></br>
                <h3>This is the parent Component2</h3>
                <span>Hello : &nbsp;<b>{this.state.name} <br></br></b> This is your counter</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement} style={{backgroundColor:"red",color:"white",fontSize:"20px",padding:"0px 10px"}}>&nbsp;-&nbsp;</button>
                <span style={{width:"200px",padding:"20px"}}>{this.state.mcount}</span>
                <button onClick={this.increment} style={{backgroundColor:"green",color:"white",fontSize:"20px",padding:"0px 10px"}}>&nbsp;+&nbsp;</button>
                
                <br></br>
                <hr></hr>
                <ChildComponentStateChange mcount={this.state.mcount}/>
                
            </div>
        </div>
        </>

    }
}
export default ParentComponentStateChange;