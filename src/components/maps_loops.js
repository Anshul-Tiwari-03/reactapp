import React, { Component } from "react";
export default class Maps_Loops extends Component {
    state={
        users:[
            { id : "101",name:"Anshul",password:"124"},
            { id : "102",name:"Anshul2",password:"125"},
            { id : "103",name:"Anshul3",password:"126"}
        ],
        isLoggedIn:false
    }
    render() {
        const arr = [10, 20, 30, 40];
        
        const userArr=this.state.users.map((value,index) => {
            return <span id ={index}>
                
                <li>{value.id} has name {value.name} and password is {value.password}</li>
            <br></br>
            </span>
        })
        const newArr = arr.map((values) => {
            return <li>{values}</li>;
        })
        return <>

            <div class='container'>
                <br></br>
                <hr></hr>
                <br></br>
                <h2> # <u><b>Use Of Maps , Lists in React </b></u></h2>
                <br></br>
                <div class="row">
                    <div class="col-sm">
                        <div class="card  badge-info">
                            <div class="card-body">
                                <h4 ># Here we will be using maps to loop over the data</h4>
                                <small>Here we have a array of values </small><br></br>
                                <span style={{ color: "black" }}><b>const arr = [10 , 20 , 30 ,40 ];</b></span>
                                <br></br>

                                <b>Our Represented data</b>
                                <ul>
                                    {newArr}
                                </ul>
                                <b><u>Code</u></b><br></br>
                                <span style={{ color: "black" }}><b>
                                const newArr = arr.map((values) {"=>"} {"{ return <li> { values } </li> }"})</b>
                                <br></br>
                                </span>
                                <span>
                                Now use in return like this : <b style={{color:"black"}}>{"{ newArr }"}</b>
                                </span>
                                <br></br>
                                <span style={{color:""}}>To use in between the JSX syntax</span>
                                <br></br>
                                {
                                    arr.map(
                                        (value,index)=>{
                                            return <li id={index}>{value}</li>
                                        }
                                    )
                                }
                                <b><u>Code </u></b><br></br>
                                <span style={{ color: "black" }}><b>
                                 {
                                    "{ arr.map( (value,index)=>{ return <li id={index}>{value}</li> })  }"
                                 }   </b>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div class="col-sm">
                        <div class="card  alert-warning">
                            <div class="card-body">
                                <h3 >Here we will be using maps to loop over the list</h3>
                                <small>Here we have a array of values </small><br></br>
                                <span style={{ color: "black" }}><b>{"    state={ "}<br></br>
                                &nbsp;{"users:["}<br></br>
        &nbsp;&nbsp;&nbsp;{'    { id : "101",name:"Anshul",password:"124"},'}<br></br>
        &nbsp;&nbsp;&nbsp;{'    { id : "102",name:"Anshul2",password:"125"},'}<br></br>
        &nbsp;&nbsp;&nbsp;{'    { id : "103",name:"Anshul3",password:"126"}'}<br></br>
        &nbsp;{'}],'}<br></br>
        &nbsp;{'isLoggedIn:false'}<br></br>
        {"}"}
        </b></span>
                                <br></br>

                                <b>Our Represented data</b><br></br><br></br>
                                {userArr}
                                

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    }
}