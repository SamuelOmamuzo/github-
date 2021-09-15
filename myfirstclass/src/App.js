import React from "react"  
import Head from "./component/Head"
import Subhead from "./component/Subhead"
import Footer from "./component/Footer"
import Body from "./component/Body"
import Img from "./component/Img"
// import Header from "./component/Header"

const App=()=>{
    return(
        // <div><Header /></div>
        <div className="main">
            <Head/>
            <Subhead/>
            <Img/>
            <Body/>
            <Footer/>
        </div>
    )
}
export default App


