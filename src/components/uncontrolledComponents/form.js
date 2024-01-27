import React, { Component } from "react";
import UncontrolledFormRefs from "./form2code";
export default class UncontrolledFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Anshul",
            emailaddress:"demo@gmail.com",
            password:"password",
            checked:false
        }
    }
    handleClick = (e) => {
        // this.state.name=e.target.value;
        this.setState({ name: e.target.value })
    }
    handleClickForm2=(e)=>{
        console.log(e.target.value);
        console.log(e.target.name);
        if(e.target.name=="email"){
            this.setState({emailaddress:e.target.value});
        }
        else if(e.target.name=="password"){
            this.setState({password:e.target.value});
        }
        else if(e.target.name=="checkbox"){
            this.setState({checked:!this.state.checked});
        }   
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.length);
        var arr=[];
        for( let i =0;i<e.target.length-1;i++){
            arr[i]=e.target[i].name + "=>"+e.target[i].value;
            console.log(e.target[i].name + ":"+e.target[i].value);
        }
        alert(arr);
        // e.target.map((eachtarget)=>{
        //     console.log(eachtarget.value);
        // })

    }
    render() {
        return <div className="container">
            <br></br>
            <hr></hr>
            <br></br>
            <h2>#<u> UnControlled Components</u></h2>
            <div className="row">
                <div className="col-sm">
                    <p>In Controlled Components , form data is handled by React component.
                         The alternative is uncontrolled Component where Form Data is controlled by DOM itself.
                          <b>refs</b> is used to get values from the DOM
                    </p>
                    <br></br>
                    <b><u>Why Use it ?</u></b><br></br>
                    <p>You do not need to write an event handler for every your data. 
                        Refs provide a way to access DOM nodes or React elements created in the render
                    </p>
                    <br></br>
                    <b>Creating refs in Constructor</b><h4>this.myRef = React.createRef()</h4>
                    <b>Attached to react elements  via attribute : </b><h4>{"<div ref={this.myRef} />"}</h4>
                    <b>Accessing refs via current : </b><h4>{"const node = this.myRef.current"}</h4>
                    <b>You may not use ref components as the do not have instance </b>
                    <UncontrolledFormRefs/>
                </div>
                <div className="col-sm">
                    {/* <h2>Here is the code</h2> */}
                    <img src={process.env.PUBLIC_URL + "refscode.png"} style={{ height: "100%", width: "100%" }} />
                </div>
            </div>
            <br></br>
            <hr></hr>
            
        </div>
    }
}