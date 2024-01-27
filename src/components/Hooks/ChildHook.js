import React, { useEffect, useState } from "react";
// import { ReactDOM } from "react";

export default function ChildHook(props){
    useEffect(()=>{
        // console.log("Ther is an update");
        console.log(props.mcount);
        setCount(props.mcount);
    })

    const [count,setCount] = useState(props.mcount);
    return <>
    <h4>This is a child Component</h4>
    <span>Updated count : <b>{count}</b></span><br></br>
    
    We captured the state update in child by <span><b>useEffect(arrow function)</b> Inside arrow function we did all our updation</span>
    </>
}