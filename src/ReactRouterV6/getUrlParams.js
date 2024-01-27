import React, { Component } from "react";
import { useParams } from "react-router-dom";

const GetUrlParams=()=> {
    let {category}=useParams()    
    return<>
    <br></br>
    <br></br>
    <h3 style={{color:"blue"}}>Hello Post Page <span>Here pass any props in url witll redirect here only </span></h3>
    <p>To access the parameters of a dynamic url we use useParams()</p>
    {/* <br></br> */}
    <b>eg. let {"{ category }"} = useParams()</b>
    <br></br>
    <p>Make Sure we used category above as we mentioned in the route to as <b>/path/:category</b></p>
    <p>Since we had used only one dynamic field so will take upto one level but if we want to dive deep <b>/path/:category/:id</b></p>
    <h5>Your value is:  {category}</h5>
    </>
}
export default GetUrlParams;