import React from "react"
import "./style.css"
import img from "../img/github-logo.png"

const Head=()=>{
    return(
        <div className="head">
            <img className="image" src={img}/>
            <h4 className="change">Overview Release Notes Help</h4>
        </div>
    )
}
export default Head