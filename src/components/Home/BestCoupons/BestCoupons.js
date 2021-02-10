import React from "react";
import "./BestCoupons.css";
const BestCoupons = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <h4 className="w-100 mb-4 bestCouponHeading">Today's Best Coupons</h4>
        <div className="col-md-4 col-sm-6 mt-3">
          <div className="card border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-7 col-sm-6 d-flex justify-content-start">
                  <div className="d-flex justify-content-around">
                    <img className="w-25" src="" />
                    <p className="font-weight-bold" style={{margin: "auto"}}>
                    
                        <strong>Grab the offer</strong> 
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <p>
                    February Offer: Extra 10% OFF Noon Coupon Code On Everything
                    + Free Delivery
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
            
                    <button
                    onClick=""
                    data-modal-target="#modal1"
                    className="btn btn-info btn-sm btn-block"
                  >
                    <span className="showCoupon"> Show Coupon</span>
                  </button>
                 
                  
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                <a href="">
                    <p>View All Company Offers</p>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestCoupons;
