import React from 'react';
import './Home.css';
import Section from './Section';
import Middle from './Middle';
import Card from './Card';
import Learner from './Learner';
import University from './University';
import Accessible from './Accessible';

const Home=()=>{


    return(
        <>
        <div className="container-fluid Home">
        <div className="divide m-2" style={{ borderBottom: "1px solid rgba(0,0,0,.12)"}}>
        <div className="row">
            <h1 clasName="col" style={{color:"blue",paddingLeft:"15px"}}><b>coursera</b></h1>
            <div clasName="col">Explore DropDown</div>
            <div clasName="col">
            <form class="form1" action="" style={{margin:"7px",maxWidth:"400px"}}>
            <input type="text" placeholder="What do you want to learn" name="search2" style={{width:"300px",padding:"4px"}}></input>
             <button type="submit" className="bg-primary p-1" style={{width:"45px"}}><i className="fa fa-search"></i></button>

            </form>
           
        </div>
        </div>
        <div className="row divide" style={{margin:"auto"}}>
            <div clasName="col" style={{margin:"10px"}}><small><a href="#" style={{color:"black"}}>For Enterprise</a></small></div>
            <div clasName="col" style={{margin:"10px"}}><small><a href="#" style={{color:"black"}}>For Student</a></small></div>
            <div clasName="col" style={{margin:"10px"}}><small><a href="#">Login</a></small></div>
            <div clasName="col" style={{margin:"10px"}}><a href="#"><button className="p-1" style={{backgroundColor:"rgb(0, 86, 210)",color:"white",borderRadius:"5px"}}><b>Join for Free</b></button></a></div>
        </div>
        </div>
        </div>
        <Section/>
        <Middle/>
        <Card/> 
        <Learner/>  
        <University/>
        <Accessible/>
        </>
    )
}

export default Home;