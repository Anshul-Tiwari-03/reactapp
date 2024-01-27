import React from "react";

const ReactFragmentComponent=()=>{
    var code="<>  <h4>First</h4> <h4>Second</h4>  </>";
    return    <>
    <h4>This is first component</h4>
    <h4>This is second component</h4>
    <p>{code}</p>
  </>
}
export default ReactFragmentComponent;