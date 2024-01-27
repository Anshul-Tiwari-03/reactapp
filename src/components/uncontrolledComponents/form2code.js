import React, { Component } from "react";
export default class UncontrolledFormRefs extends Component{
    constructor(props){
        super(props);
        this.state={
            name:""
        }
        this.myNameRef=React.createRef();
    }
    
    handledSubmit=(e)=>{
        e.preventDefault();
        console.log(this.myNameRef.current);
        this.setState({name : this.myNameRef.current.value})

    }
    render(){
        return<>
        <form onSubmit={this.handledSubmit}>
            <br></br>
            <h3>Your name will appear on submit : {this.state.name}</h3>
            <label>Name</label><br></br>
            <input type="text" ref={this.myNameRef}/>
            <button type="submit">Submit</button>
        </form>
        </>
    }
}