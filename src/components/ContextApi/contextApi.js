import React, { Component } from "react";
import ContextApi2 from "./contextApi2";
export default class ContextApi extends Component{
    render(){
        return<>
        <div className="container">
            <br></br>
            <br></br>
            <h2># <b><u style={{color:"red"}}>Context API</u></b></h2>
            <span>Here is a view of how Context API works</span><br></br><br></br>

            <li>Earlier we needed to pass the props to every class from parent to all the way to derieved childs unncesary if we needed at the end child.</li>
            <h4><li>Context ApI Provides a way to pass data through the component tree without having to pass props down manually at every level</li></h4>
            <b>THree Stages are followed</b>
            <li>Passing the initial state to <b>React.createContext</b> . This  function then returns an Object with a <b>Provider</b> & <b>Customer</b></li>
            <li>Using the <b>Provider</b> component at the top of the tree and making it accept a prop called <b>value</b>. This value can be anthing.</li>
            <li>Using the <b>Consumer</b> component anwhere below the Provider in the component tree to get a subset of the state.</li>
            
            <br></br>
            <img style={{width:"100%"}} src={process.env.PUBLIC_URL +"contextApi.png"} />
            <h4><u>Create Context</u></h4>
            <span>It creates a Context object.</span>
            <br></br>
            <span>When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above in the tree.</span>
            <br></br>
            Example : <b>export const MyContext = React.createContext(defaultValue);</b>
            <br></br><br></br>
            <h4><u>Context Provider</u></h4>
            <span>Every object comes with a <b>Provider</b> React component that allows consuming components to subscribe to context changes.</span>
            <br></br>
            <li>One Provider can connect to many consumers</li>
            <li>Providers can be nested to override values deeper within the tree.</li>
            <b><u>Syntax:</u></b><br></br>
            <span>{"<MyContext.Provider value={ //  some  value } > <Component/> </MyContext.Provider>"}</span><br></br>
                <span>{"<MyContext.Provider value={ this.state.value } > <Parent2/> </MyContext.Provider>"}</span><br></br>
            <br></br>

            <h4><u>Context Consumer</u></h4>
            <span>A React Component that subscribes a context changes.This lets you subscribe to a context within a function component.</span>
            <br></br>
            <span>It requires a function as a child. This function receives the current context value and returns a React node.</span>
            <li>The value argument passed will be equal to the value prop of the closest Provider for this context above in the tree.</li>
            <li>If there is no Provider for this context above , value argument will be equal to the default value that was passed to <b>createContext()</b></li>
            <b><u>Syntax:</u></b><br></br>
            <span>{"<MyContext.consumer>  {  value => //do operations on it } </MyContext.consumer>"}</span><br></br>
            <span>{"Remember to import this MyContext when using consumer or Producer in differnt Component"}</span><br></br>
            <br></br>
            <div className="">
                <ContextApi2/>
                
            </div>
        </div>
        </>
    }
}