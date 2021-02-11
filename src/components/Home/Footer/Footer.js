import React from 'react';
import './Footer.css';
import image from '../../../images/undraw_happy_announcement_ac67.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone, faPrint,} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faTwitter, faGooglePlus, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
           <footer className="page-footer font-small " style={{backgroundColor: "#ffffff"}}>
               {/* footer first style start */}
           <div className="container" style={{background: "lightblue", borderRadius: "15px"}}>
                <div className="row py-4 d-flex align-items-center justify-content-between">
                    <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
                    <h5 className="mb-0">Newsletter</h5>
                    <p className="mt-2">
                        <small>
                            Sign up for our Newsletter and get best money saving coupons
                        </small>
                    </p>
                    <form>
                        <input
                            className="p-1"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter Your Email"
                        />
                        <button
                            type="submit"
                            className="btn btn-info"
                            style={{     
                                height: "36px",
                                lineHeight: "normal",
                                marginLeft: "0px",
                                marginBottom: "2px",
                                borderRadius: "0",
                                
                                }}
                           
                            >
                            <span id="subscribe_Button" className="text-white">Subscribe</span>
                        </button>
                    </form>
                    </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <img className="w-50" style={{background: "lightblue", opacity: "2"}} src={image} alt=""/>
                        </div>
                </div>
           </div>
           <hr/>
           {/* footer second design start */}
          <div className="container">
          <div className="row py-4 d-flex align-items-center">
          
            <div
              className="col-md-6 col-lg-5  text-md-left mb-4 mb-md-0"
            >
              <h6 className="mb-0">Get connected with us on social networks!</h6>
            </div>
        

   
            <div className="col-md-6 col-lg-7 text-end ">
     
              <a className="fb-ic icon" href="#">
               
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
         
              <a className="tw-ic icon" href="#">
                
                <FontAwesomeIcon icon={faTwitter} />
              </a>
     
              <a className="gplus-ic icon" href="#">
           
                <FontAwesomeIcon icon={faGooglePlus} />
              </a>
    
              <a className="li-ic icon" href="#">
               
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
     
              <a className="ins-ic icon" href="#">
                
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
        
          </div>
        
        </div>
        <hr/>
        {/* footer third design start */}
        <div className="container text-center text-md-left mt-5">
        <div className="row mt-3">
    
          <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mb-4">
     
            <h4 className="font-weight-bold">CouponSit</h4>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px"}}
            />
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
         

      
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
            <h6 className="text-uppercase font-weight-bold">Quick Links</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px"}}
            />
            <p>
              <a href="#!">All Stores</a>
            </p>
            <p>
              <a href="#!">Catagories</a>
            </p>
            <p>
              <a href="#!">Bank Offers</a>
            </p>
            <p>
              <a href="#!">Exclusive Coupons</a>
            </p>
            <p>
              <a href="#!">Blog</a>
            </p>
          </div>
        

        
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
            <h6 className="text-uppercase font-weight-bold">Stores</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px"}}
            />
            <p>
              <a href="#!">GAP Coupons</a>
            </p>
            <p>
              <a href="#!">Nissnass Coupons</a>
            </p>
            <p>
              <a href="#!">Shein Coupons</a>
            </p>
            <p>
              <a href="#!">Homebox Coupons</a>
            </p>
          </div>
        

    
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
            <h6 className="text-uppercase font-weight-bold">Information</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px"}}
            />
            <p>
              <a href="#!">About Us</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
            <p>
              <a href="#!">Privacy</a>
            </p>
            <p>
              <a href="#!">Terms</a>
            </p>
            <p>
              <a href="#!">Contact Us</a>
            </p>
            <p>
              <a href="#!">Partnership</a>
            </p>
          </div>
    
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{width: "60px"}}
            />
            <p> <FontAwesomeIcon icon={faHome} />New York, NY 10012, US</p>
            <p> <FontAwesomeIcon icon={faEnvelope} /> info@example.com</p>
            <p> <FontAwesomeIcon icon={faPhone} /> + 01 234 567 88</p>
            <p> <FontAwesomeIcon icon={faPrint} /> + 01 234 567 89</p>
          </div>
        
        </div>
        </div>
        <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="" style={{textDecoration: "none"}}> 
                CouponSit.com
            </a>
        </div>
           </footer>
           
        </div>
    );
};

export default Footer;

