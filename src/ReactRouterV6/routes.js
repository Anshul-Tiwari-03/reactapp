import React from "react";
import { Route, Routes,Link } from "react-router-dom";
import GetUrlParams from "./getUrlParams";
import GetUrlParams2 from "./getUrlParams2";
import GetUrlParams3 from "./getUrlParamsAndQuery";
const AllRoutes=()=>{
    <Routes>
    <Route path="/" element={<h4 style={{color:"black"}}>Hello Home Page </h4>}/>
    <Route path="/about" element={<h4 style={{color:"blue"}}>Hello About Page </h4>}/>
    <Route path="/post" element={<h4 style={{color:"blue"}}>
        Post Page type anything like <Link to="/post/mobile">/post/mobile</Link> or <Link to="/post/laptop/1">/post/laptop/1</Link> or <Link to="/post2/laptop/1?price=1000">/post/laptop/1?price=1000</Link> </h4>}/>
    <Route path="/post/:category" element={ <GetUrlParams/> }/>
    <Route path="/post/:category/:id" element={ <GetUrlParams2/> }/>
    <Route path="/post2/:category/:id" element={ <GetUrlParams3/> }/>
    
    <Route path="*" element={<h1 style={{color:"blue"}}>Error Page using path as * in Route</h1>}/>
    

    
</Routes>

}
export default AllRoutes;