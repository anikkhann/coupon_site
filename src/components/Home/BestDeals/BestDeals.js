import React from 'react';
import './BestDeal.css';
const BestDeals = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <h4 className="w-100 mb-5 bestDeal">
                    Today's Best Deals
                </h4>
                <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <img
                      className=""
                      style={{width: "100%", height: "100px"}}
                     
                    />
                  </div>

                  <div
                    className="m-0 p-0"
                    style={{ border: "2px solid white",
                        position: "absolute",
                        top: "70px",
                        left: "35px",
                        width: "120px",
                        height: "60px"}}
                   
                  >
                    <img
                      style={{width: "100%", height: "100%"}}
                      src=""
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="m-0 p-0 mt-5">
                <p>ADIDAS</p>
                <p><strong>Extra 15% OFF Coupon</strong></p>
              </div>
            </div>
          </div>
        </div>
        {/* second card start*/}
        <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <img
                      className=""
                      style={{width: "100%", height: "100px"}}
                     
                    />
                  </div>

                  <div
                    className="m-0 p-0"
                    style={{ border: "2px solid white",
                        position: "absolute",
                        top: "70px",
                        left: "35px",
                        width: "120px",
                        height: "60px"}}
                   
                  >
                    <img
                      style={{width: "100%", height: "100%"}}
                      src=""
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="m-0 p-0 mt-5">
                <p>ADIDAS</p>
                <p><strong>Extra 15% OFF Coupon</strong></p>
              </div>
            </div>
          </div>
        </div>
        
        {/* second card end */}
         {/* third card start*/}
         <div className="col-md-4">
          <div className="card border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <img
                      className=""
                      style={{width: "100%", height: "100px"}}
                     
                    />
                  </div>

                  <div
                    className="m-0 p-0"
                    style={{ border: "2px solid white",
                        position: "absolute",
                        top: "70px",
                        left: "35px",
                        width: "120px",
                        height: "60px"}}
                   
                  >
                    <img
                      style={{width: "100%", height: "100%"}}
                      src=""
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="m-0 p-0 mt-5">
                <p>ADIDAS</p>
                <p><strong>Extra 15% OFF Coupon</strong> </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* third card end */}

        
      </div>
      {/* best place start */}
      <div class="row mt-5">
        <div class="col-md-12">
          <div class="card" style={{borderLeft: "5px solid #00b4cc"}}>
            <div class="card-body">
              <h4 style={{textAlign: "center", fontWeight: "bold"}}>
                CouponSite - Best place for Coupons, Discounts and Saving
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* best place end */}
        </div>
        
    );
};

export default BestDeals;