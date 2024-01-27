import React, { Component } from "react";
import { useParams } from "react-router-dom";

const GetUrlParams2=()=> {
    let {category,id}=useParams()    
    return<>
    <br></br>
    <br></br>
    <h3 style={{color:"blue"}}>Hello Post Page <span>Here pass any props in url witll redirect here only </span></h3>
    <p>To access the parameters of a dynamic url we use useParams()</p>
    {/* <br></br> */}
    <b>eg. let {"{ category,id }"} = useParams()</b>
    <br></br>
    <h5>Your value is:  {category} and id is {id}</h5>
    </>
}
export default GetUrlParams2;