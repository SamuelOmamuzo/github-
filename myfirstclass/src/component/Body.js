import React from "react"
import "./style.css"
import img4 from "../img/4.png"
import img5 from "../img/5.png"
import img6 from "../img/6.png"

const Body=(props)=>{
    return(
        <div className="body">
            <div className="div">
                <img className="div2" src={img4}/>
                <div className="div2">
                    <h3>Attribute commits with collaborators easily </h3>
                    <span>Quickly add co-authors to your commit. Great for pairing and </span>
                    <span>excellent for sending a little love/credit to that special </span>
                    <span>someone who helped fix that gnarly bug of yours. See the </span>
                    <span>attribution on the history page, undo an accidental attribution, </span>
                    <span>and see the co-authors on github.com </span>
                </div>
            </div>
            <div className="div">
                <div className="div2">
                    <h3>Checkout branches with pull requests and<br/> view CI statuses </h3>
                    <span>See all open pull requests for your repositories and check  </span>
                    <span>them out as if they were a local branch, even if they're from </span>
                    <span>upstream branches or forks. See which pull requests pass  </span>
                    <span>commit status checks, too!</span>
                </div>
                <img className="div2" src={img5}/>
            </div>
            <div className="div">
                <img className="div2" src={img6}/>
                <div className="div2">
                    <h3>Syntax highlighted diffs </h3>
                    <span>The new GitHub Desktop supports syntax highlighting when </span>
                    <span>viewing diffs for a variety of different languages. </span>
                </div>
            </div>
        </div>
    )
}
export default Body