import React, { useState } from "react";

export default function Condition(){

    const [show,toggleShow]=useState(false)
    const Toggle=()=>{
        // useState({show:false})
        toggleShow(!show);   
    }
    const value=false
    const Hello=<><div class="card" style={{width: "18rem"}}>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div></>;
    return<>
        <div className='container'>
        <br></br>
        <hr></hr>
        <br></br>
        <h2># <b><u style={{color:"blueviolet"}}>Conditional Operation and Operators</u></b></h2>
        <br></br>
        <div className='row'>
          <br></br>
          <div className='col-6'>
          <img src={process.env.PUBLIC_URL+"condition.png"} style={{width:"100%",height:"100%"}}/>
        
          </div>
          <div className='col-6'>
            <h4># It is used in places where there is a condition.</h4>
            <button type="button" class="btn btn-primary" onClick={Toggle}>Toggle</button><br></br>
            <small>Clicking above button will toggle. State show : <b>{ ""+show+"" }</b></small><br></br>
            <div class="row">
                <div class="col-sm">
                    { show && Hello}
                    
                </div>
                <div class="col-sm">
                    <span>Below is the demonstration of the if else in JSX</span>
                    { show ? <h4>Hello Anshul</h4>:<h4>Hello Guest</h4>}
                </div>
            </div>
          </div>
        </div>

      </div>
        </>
    

}