import React from "react"
import "./style.css"

const Subhead=()=>{
    return(
        <>
            <div className="subhead">
                <h1>GitHub Desktop</h1>
                <span>Focus on what matters instead of fighting with Git.Whether your're new to Git or a seasoned user,</span>
                <span>GitHub Desktop simplifies your development workflow</span>
            </div>
            <div className="subhead2">
                <button className="button"><h3>Download for Windows (64bit)</h3></button>
                <span>Download for macOS or Windows (msi)</span>
                <span>By downlaoding, you agree to the Open Source Applications Terms.</span>
            </div>
        </>
    )
}
export default Subhead