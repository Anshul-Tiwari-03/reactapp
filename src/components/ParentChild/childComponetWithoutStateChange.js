import React, { Component } from "react";
class ChildComponentWithoutStateChange extends Component{

    constructor(props){
        super(props);
        this.state={
            count:this.props.count
        }
    }
    render(){
        return<>
        <br></br>
        <h3>This is the child Component</h3>
        <span> Your Count is : <b>{this.state.count}</b></span>
        <br></br>
        <span>Here change in parent component will not reflect in child component.</span>
        </>
    }
}
export default ChildComponentWithoutStateChange