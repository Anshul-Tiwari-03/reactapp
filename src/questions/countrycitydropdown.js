import { render } from "@testing-library/react"
import { useState } from "react";

const countries=[
    
    {
        name :'India', value:'IN',cities:[
        'Delhi',
        'Mumbai'
    ]},
    {
        name :'Pak', value:'PK',cities:[
        'Lahore',
        'Karachi'
    ]},
    {
        name :'Bangladesh', value:'BG',cities:[
        'Dhaka',
        'Chittagong'
    ]},

]
export default function DropDown(){    
    const [city,setCitites]=useState([]);

    return<>
    <br></br>
    <hr></hr>
    <br></br>
    <h2>This is a drop down example </h2>
    <b style={{marginLeft:"10px"}}>Countries</b>
    
    <select style={{marginLeft:"10px"}} onChange={(e)=>{
        console.log(e.target.value);
        console.log(countries[e.target.value].cities);
        setCitites(countries[e.target.value].cities);
        // setCitites(data.)
        // setCitites=e.target.value;
    }}>
        {
            countries.map((data,index)=>{
                return<>
                <option value={index} >{data.name}</option>
                </>
                
            })
        }
    </select>
    <b style={{marginLeft:"40px"}}>Cities</b>
    <select style={{marginLeft:"10px"}}>
        {
            city.map((data,index)=>{
                return <option value={index}>{data}</option>
            })
        }
    </select>
    </>
}