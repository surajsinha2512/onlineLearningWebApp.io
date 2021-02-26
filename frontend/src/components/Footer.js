import React from 'react';
import './Footer.css';
const Footer=()=>{

    return (
        <>
        <div className="container-fluid Footer">
        <div className="row">
      
        <div className="imageValuen row">
        <div className="textData" style={{maxWidth:"40%",margin:"30px"}}>
        <div className="" style={{margin:"10px",color:"blue"}}><b>Applied Learning</b></div>
        <div className="" style={{fontSize:"30px",margin:"10px"}}><b>Master skills with in-depth learning</b></div>   
        <div className="" style={{fontSize:"20px",margin:"10px"}}>Apply what you learn with self-paced quizzes and hands-on projects. Get feedback from a global community of learners.</div> 
        </div>
        <div className=""><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/front-page-rebrand/value-props/applied-learning.png?auto=format%2Ccompress&dpr=1&w=655&h=481&q=40" alt=""/></div> 
        
        </div>
            </div>
        </div>
        </>
    )

}
export default Footer;
