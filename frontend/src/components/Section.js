import React from 'react';
import './Section.css';

const Section=()=>{


    return (
        <>
        <div className="container Section">
            <div className="row">
                <div className="col">
                <div style={{fontSize:"80px"}} className="m-10"><b>Your Course to Success</b></div>
               <br></br>
                <h5>Build skills with courses, certificates, and degrees online from world-class universities and companies.</h5>
                 <button className="btn" style={{height:"70px",width:"200px" ,backgroundColor:"rgb(0, 86, 210)",color:"white"}}><b>Join for Free</b></button>
                </div>
             
                <div className="col">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/hero/hero-b.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=400"></img>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Section;