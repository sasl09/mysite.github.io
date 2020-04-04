import React from "react";
import { Header } from "react-mdl"

function RespHeader(){
  return(
    <div>
      <Header style={{background: "linear-gradient(to top, #1CB5E0, #000046)"}} className="header-color" title=<Link className="header-text" to="/">Home</Link> scroll>
    </div>
  )
}

export default RespHeader
