import React from 'react';
import './GetInTouch.css';
const GetInTouch = () => {
    return (
        <div className="container">
            <div className="row m-5">
        <div className="col-md-12">
          <div>
            <h4 style={{textAlign: "center", fontWeight: "bold"}}>Get In Touch</h4>
          </div>

          <div>
            <p style={{textAlign: "center"}}>
              For all partnership queries & details, please click delow
            </p>
          </div>

          <div style={{textAlign: "center"}}>
            <a type="button" className="btn btn-info btn-lg contactUs" href="">
              Contact Us
            </a>
          </div>
        </div>
      </div>
        </div>
    );
};

export default GetInTouch;