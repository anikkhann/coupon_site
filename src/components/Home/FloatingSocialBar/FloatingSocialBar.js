import React from 'react';
import './FloatingSocialBar.css';
import image1 from '../../../images/fb1.png';
import image2 from '../../../images/tw1.png';
import image3 from '../../../images/li1.png';
import image4 from '../../../images/ins1.png';
const FloatingSocialBar = () => {
    return (
        <div className="sticky-container ct-socials">
        <ul className="sticky"> 
      <li className="face">
        
        <a href="#" className="text-white" >
            <img width="32" height="32" title="" alt="" src={image1} /> <p>Facebook</p> 
        </a> 
     
     </li> 
     <li className="tweet"> 
     
        <a href="#" className="text-white">
            <img width="32" height="32" title="" alt="" src={image2} /> <p>Twitter</p> 
        </a>
     
     </li> 
     <li className="linked"> 
        <a href="#" className="text-white" >
          <img width="32" height="32" title="" alt="" src={image3} /> <p>Linkedin</p> 
        </a> 
    
     </li> 
     <li className="insta">
        <a href="#" className="text-white" >
            <img width="32" height="32" title="" alt="" src={image4} /> <p>Instagram</p> 
        </a> 
    
     </li>
     
       </ul>
        </div>
    );
};

export default FloatingSocialBar;