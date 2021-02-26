import React from 'react';
import './University.css';

const University=()=>{

    return (
        <>
        <div className="container-fluid University">
        <div className="row" style={{fontSize:"40px"}}>
        <div className="col" style={{margin:"35px"}}><b>World-class learning for anyone, anywhere</b></div>
        </div> 
        <div className="imageValuen row">
        <div className="textData" style={{maxWidth:"40%",margin:"30px"}}>
        <div className="" style={{margin:"10px",color:"blue"}}><b>Top Quality</b></div>
        <div className="" style={{fontSize:"30px",margin:"10px"}}><b>Learn from leading universities and companies</b></div>   
        <div className="" style={{fontSize:"20px",margin:"10px"}}>Start streaming on-demand video lectures today from top instructors in subjects like business, computer science, data science, language learning, & more.</div> 
        </div>
        <div className=""><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/top-quality-image.png?auto=format%2Ccompress&dpr=1&w=624&h=463&q=40" alt=""/></div> 
        
        </div>
        </div>
        </>
    )
}
export default University;