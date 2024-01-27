import React, { Component } from "react";
class ChildComponentStateChange extends Component{

    constructor(props){
        super(props);
        this.state={
            count:this.props.mcount
        }
    }
    static getDerivedStateFromProps(nextProps, prevState){
           
        console.log("get derieved state from props called");
        console.log(nextProps);
        console.log(prevState);
        if(nextProps.mcount !== prevState.count){
            console.log(nextProps.mcount);
            return{
                count:nextProps.mcount
            };
        }
        else{
            return null
        }
        
    }
    render(){
        return<>
        <br></br>
        <h3>This is the child Component2</h3>
        <span> Your Count is : <b>{this.state.count}</b></span>
        <br></br>
        <span>Here change in parent component will be reflect in child component.</span>
        </>
    }
}
export default ChildComponentStateChange