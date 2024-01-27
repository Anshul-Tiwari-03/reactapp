import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import ChildHook from "./ChildHook";

export default function ParentHook(props){
    
    const handleClick=()=>{
        setSCount(scount+1);
    }

    const [scount,setSCount]=useState(props.count);
    return <>
    <span>Our Hook Received <b>props.count  : {props.count}</b></span><br></br>
    <span>Our Hook took in state <b>scount  : {scount}</b></span> , by using const[scount,setScount] = usestate(props.count)<br></br><br></br>
    Now to change value in state <button onClick={handleClick} style={{backgroundColor:"blue",color:"white"}}>Change</button>

    <br></br>
    To reflect changes in Child Component we used 
    <ChildHook mcount={scount}/>
    </>
}