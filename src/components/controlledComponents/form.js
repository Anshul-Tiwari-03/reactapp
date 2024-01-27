import React, { Component } from "react";
export default class FormComponent extends Component {

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
            <h2>#<u> Controlled Components</u></h2>
            <div className="row">
                <div className="col-sm">
                    <form>
                        <br></br>
                        <label><b>HTML Input : </b></label>&nbsp;
                        <input type="text" value="Default value" /><br></br>
                        <small>IN Html input it will show update and take value as default value</small><br></br>
                        <small>Note above one is also react generated so will not work as html Its a demonstration</small><br></br>
                        <br></br>
                        <label><b>React Input : </b></label>&nbsp;
                        <input type="text" value="Default value" /><br></br>
                        <small>Above will show error in console since it took value as a prop</small><br></br>
                        <small>Also it will be read only</small><br></br>
                        <br></br>
                        <label><b>Working React Input: </b></label>&nbsp;
                        <input type="text" value={this.state.name} onChange={this.handleClick}></input><br></br>
                        <small>For complete working of it we have to give onChange and state updation</small>
                        <br></br>


                    </form>

                </div>
                <div className="col-sm">
                    {/* <h2>Here is the code</h2> */}
                    <img src={process.env.PUBLIC_URL + "codeControlledInput.png"} style={{ height: "100%", width: "100%" }} />
                </div>
            </div>
            <br></br>
            <hr></hr>
            <h2 class="card-title"><u>Multiple Input Form </u></h2>
            <br></br>
            <div class="row">
                <div class="col-sm">
                <div class="card alert-info" style={{width: "100%"}}>
                <div class="card-body">
                    <h5 class="card-title">Multiple Input Form </h5>
                    <p class="card-text">Handling multiple Inputs based on name and then doing state updation.</p>
                    <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email"  name="email" value={this.state.emailaddress} onChange={this.handleClickForm2} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={"Enter email"}></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleClickForm2}  class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="checkbox" checked={this.state.checked} onChange={this.handleClickForm2} class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

                </div>
            </div>

                </div>
                <div class="col-sm">
                <div class="card alert-info" style={{width: "100%"}}>
                <div class="card-body">
                    <h5 class="card-title">Form Submission Control <b>onSubmit({"{handleSubmit}"})</b></h5>
                    <p class="card-text">Handling multiple Inputs based on name and then doing state updation.</p>
                    <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email"  name="email" value={this.state.emailaddress} onChange={this.handleClickForm2} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={"Enter email"}></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleClickForm2}  class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div class="form-check">
                    <input type="checkbox" name="checkbox" checked={this.state.checked} onChange={this.handleClickForm2} class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

                </div>
            </div>

                </div>
            </div>

        </div>
    }
}