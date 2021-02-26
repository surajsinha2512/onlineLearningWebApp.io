import React from 'react';
import './Accessible.css';

const Accessible=()=>{

    return (
        <>
        <div className="container Accessible">
        <div className="imageAccess">
        <div className=""><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/accessible-bigger.svg?auto=format%2Ccompress&dpr=1&w=518&h=501&q=40" alt="..."/></div>
         <div className="">
            <div className="" style={{color:"blue",margin:"20px"}}><b>Accessible </b></div>
            <div className="" style={{fontSize:"35px",margin:"20px"}}>Find flexible, affordable options</div>
            <div className="" style={{fontSize:"20px",margin:"20px"}}>Choose from many options including free courses and <a href="https://www.coursera.org/degrees">university degrees</a> at a breakthrough price. Learn at your own pace, 100% online. </div>
         </div>
        </div>
        </div>
        </>
    )
}
export default Accessible;