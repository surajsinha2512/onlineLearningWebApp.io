import React from 'react';
import './University.css';

const University=()=>{

    return (
        <>
        <div className="container-fluid University">
        <div className="row" style={{fontSize:"40px"}}>
        <div className="col"><b>World-class learning for anyone, anywhere</b></div>
        </div> 
        <div className="imageValue">
        <div className="">
        <div className="" style={{margin:"50px",maxWidth:"50%"}}>    
        <div className="row">Top Quality</div>
        <div className="row" style={{fontSize:"30px"}}>Learn from leading universities and companies</div>   
        <div className="row">Start streaming on-demand video lectures today from top instructors in subjects like business, computer science, data science, language learning, & more.</div>     
        
        </div>
        
                <div className="col"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/top-quality-image.png?auto=format%2Ccompress&dpr=1&w=624&h=463&q=40" alt=""/></div>
                </div>
            </div>
        </div>
        </>
    )
}
export default University;