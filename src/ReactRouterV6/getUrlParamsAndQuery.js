import React, { Component } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const GetUrlParams3=()=> {
    let {category,id}=useParams()    
    let [searchParams,setSearchparams]=useSearchParams()
    return<>
    <br></br>
    <br></br>
    <h3 style={{color:"blue"}}>Hello Post Page <span>Here pass any props in url witll redirect here only </span></h3>
    <p>To access the parameters of a dynamic url we use useParams()</p>
    {/* <br></br> */}
    <b>eg. let {"{ category,id }"} = useParams()</b>
    <br></br>
    <p>Your value is:  {category} and id is {id}</p>
    <h5>TO get the query parameters we used : <b> let [searchParams,setSearchparams]=useSearchParams()</b> </h5>
    <p>All the data : <b>{searchParams}</b></p>
    <p>To get the corresponding key data passs <b>{"{ searcParams.get('price') }"}</b> : {searchParams.get('price')}</p>
    <p>We passed price as key as we know that url is having the key </p>
    
    </>
}
export default GetUrlParams3;