import React from "react";
import images1 from "../../../images/undraw_add_to_cart_vkjp.svg";
import images2 from "../../../images/undraw_online_shopping_ga73.svg";
import images3 from "../../../images/undraw_successful_purchase_uyin.svg";
const SelectCoupon = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-md-4 p-2">
              <div className="card border-0">
                <div className="card-body">
                  <div>
                    <img className="w-50" src={images1} />
                  </div>

                  <div className="mt-3" style={{ textAlign: "center" }}>
                    <h5 className="p-2 font-weight-bold">Select Coupon</h5>
                    <p>
                      Find the right for your favorite <br />
                      online shopping. Read terms
                      <br />& conditions of the offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="card border-0">
                <div className="card-body">
                  <div>
                    <img className="w-50" src={images2} />
                  </div>

                  <div className="mt-3" style={{ textAlign: "center" }}>
                    <h5 className="p-2 font-weight-bold">Shop Normal</h5>
                    <p>
                      Visit the online store and choose best <br />
                      products suitable for you.
                      <br />
                      Add them to Cart
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 p-2">
              <div className="card border-0">
                <div className="card-body">
                  <div>
                    <img
                      className=""
                      style={{ width: "50%", height: "118px" }}
                      src={images3}
                    />
                  </div>

                  <div className="mt-4" style={{ textAlign: "center" }}>
                    <h5 className="p-2 font-weight-bold">Instant Savings</h5>
                    <p>
                      Visit the online store and choose best <br />
                      products suitable for you.
                      <br />
                      Add them to Cart
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCoupon;
