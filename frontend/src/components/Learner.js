import React from 'react';
import './Learner.css';
const Learner=()=>{

    return (
        <>
        <div className="container-fluid learn">
            <div className="row">
                <div className="imagePos col">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/learner-outcomes/outcomes.png?auto=format%2Ccompress&dpr=1&w=606&h=553&q=40" alt="..."/>
                </div>
                <div className="col">
                    <div className="textSizing"><b>Learner outcomes on Coursera</b></div>

                    <div className="textSizing2">
               <b>87% of people learning </b>for professional development 
               <div><b>report career benefits</b> like getting a promotion, a</div> raise, or starting a new career
                </div>
                <div className=""><b>- Coursera Learner Outcomes Survey (2019)</b></div>

                <button className="btn btn-primary m-5 p-2"><b>Join for Free</b></button>
                <button className="btn btn-light p-2 border-primary" style={{color:"blue"}}><b>Try Coursera for Bussiness</b></button>

                </div>
               


            </div>
        </div>
        </>
    )
}
export default Learner;