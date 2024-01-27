import React, { Component } from "react";
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import GetUrlParams from "./getUrlParams";
import GetUrlParams2 from "./getUrlParams2";
import GetUrlParams3 from "./getUrlParamsAndQuery";
import AllRoutes from "./routes";
// import getUrlParams from "./getUrlParams";
export default class ReactRouter extends Component{

    render(){
        return <>
        <div className="container">
        <div class="card  alert-warning">
            <div class="card-body">
                <h3>
                    Hello this is a session on react router V6.</h3>
                    <BrowserRouter>
                    
                In React Router we need to give : <br></br>
                <li>BrowserRouter {"->"} Routes {"->"} Route {"eg. <Route path='/' element={ //Any Component } />"}</li>
                <br></br>
                <h4>But now we do not want page to reload on page change </h4>
               
                <b>React has thing called {"{ Link }"}</b> <br></br>
                <span>{"eg. <Link to='/' > Home </Link>"}</span>
                <br></br>
                <li>{" <a> is replaced by <Link>"}</li>
                <li>{" href  is replaced by to "}</li>
                <h3>Sample Demonstration</h3>
                <b>Using {"<a> "} tag</b><br></br>
                <a href="/"><button type="button" class="btn btn-primary btn-sm">Home</button></a>&nbsp;&nbsp;&nbsp;
                <a href="/about"><button type="button" class="btn btn-secondary btn-sm">About</button></a><br></br><br></br>
                <b>Using {"<Link> "} tag</b><br></br>
                
                
                
                <Link to="/"><button type="button" class="btn btn-primary btn-sm">Home</button></Link>&nbsp;&nbsp;&nbsp;
                <Link to="/about"><button type="button" class="btn btn-secondary btn-sm">About</button></Link>&nbsp;&nbsp;&nbsp;
                
                <br></br>
                <br></br>
                <Link to="/post"><button type="button" class="btn btn-warning btn-sm">Post</button></Link>&nbsp;&nbsp;&nbsp;
                
                <Link to="any"><button type="button" class="btn btn-danger btn-sm">Error</button></Link>&nbsp;&nbsp;&nbsp;
                

                    <AllRoutes/>
                    </BrowserRouter>
                

                {/* <button type="button" class="btn btn-secondary btn-sm"><Link to="/about">About</Link></button> */}
            </div>
        </div>
        <br></br>
        <br></br>
        </div>
        </>
    }
}