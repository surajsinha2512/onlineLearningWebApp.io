import React,{useState} from 'react';
import './Card.css';

const Card=()=>{
const [image,setImage]=useState([
    {img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Learn.svg?auto=format%2Ccompress&dpr=1&w=&h=55",text:"Learn the latest skills",desc:"like business analytics, graphic design, Python, and more"},
    {img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Get-Ready.svg?auto=format%2Ccompress&dpr=1&w=&h=55",text:"Get ready for a career",desc:"in high-demand fields like IT, AI and cloud engineering"},
    {img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Earn-Degree.svg?auto=format%2Ccompress&dpr=1&w=&h=55",text:"Earn a degree",desc:"from a leading university in business, computer science, and more"},
    {img:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/front-page-rebrand/achieve-your-goals/Icon-Upskill-your-org.svg?auto=format%2Ccompress&dpr=1&w=&h=55",text:"Upskill your organization",desc:"with on-demand training and development programs"}
   
]);
    return (
        <>
        <div className="container Card">
            <div className="row textElem" >
            <div className="col" style={{margin:"auto"}}><b>Achieve your goals with Coursera</b></div> 
            </div>
            <br/>
            <br/>
            <div className="row cardAlign">
           
        {
            image.map((value)=>{
                return (
                    <>
                 
        <div class="car" style={{width: "13rem"}}>
        <img src={value.img} class="card-img-top" alt="..." style={{height:"60px",width:"60px",alignContent:"center"}}/>
        <div class="card-body">
        <h3><b>{value.text}</b></h3>
        <p class="card-text">{value.desc}</p>
        </div>
        </div>




                    </>
                )
            })
        }


            </div>

        </div>
        </>
    )

}
export default Card;