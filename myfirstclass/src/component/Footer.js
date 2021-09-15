import React from "react"
import "./style.css"
import img0 from "../img/1.png"
import img1 from "../img/2.png"
import img2 from "../img/3.png"

const Footer=()=>{
    return(
        <>
            <div className="footer">
                <div className="card">
                    <img className="img" src={img0}/>
                    <h3>Expanded image diff support</h3>
                    <span>Easily compare changed images,see the</span>
                    <span>befor and after, swipe or fade between the</span>
                    <span>two, or look at just the changed parts.</span>
                </div>
                <div className="card">
                    <img className="img" src={img1}/>
                    <h3>Extensive editor & shell intergrations</h3>
                    <span>Open your favourite editor or sheel from the</span>
                    <span>app, or jump back to GitHub Desktop from</span>
                    <span>your sheel. GitHub Desktop is your</span>
                    <span>springboard for work.</span>
                </div>
                <div className="card">
                    <img className="img" src={img2}/>
                    <h3>Community supported</h3>
                    <span>GitHub Desktop is open source now! Check</span>
                    <span>out our roadmap, contribute,and help us</span>
                    <span>make collaboration even easier.</span>
                </div>
            </div>
            <div className="click">
                <button className="button2"><h3>See what's been built</h3></button>
            </div>
            <div className="terms">
                <span className="ds">Terms Privacy Policy EULA Release Notes</span>
                <br/>
                <span className="ds2">© 2021 GitHub, Inc. All rights reserved.</span>
            </div>
        </>
    )
}
export default Footer