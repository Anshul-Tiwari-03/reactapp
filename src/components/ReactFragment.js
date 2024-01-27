import React from "react";

const ReactFragmentComponent=()=>{
    var code="<React.Fragment>  <h4>First</h4> <h4>Second</h4>  </React.Fragment>";
    return    <React.Fragment>
    <h4>This is first component</h4>
    <h4>This is second component</h4>
    <p>{code}</p>
  </React.Fragment>
}
export default ReactFragmentComponent;