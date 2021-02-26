import React, { useState } from 'react';
import './Explore.css';

function Explore() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container">
      <button  className="p-1" style={{backgroundColor:"rgb(0, 86, 210)",color:"white",margin:"9px",borderRadius:"3px"}}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
         Explore
      </button>
      {isShown && (
        <div className="explore" style={{borderRadius:"7px"}}>
        <div style={{display:"",backgroundColor:"white"}} >
            <div>Arts And Humanity</div>
            <div>Computer Science</div>
            <div>Bussiness</div>
            <div>Information Technology</div>
            <div>Bussiness</div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Explore;