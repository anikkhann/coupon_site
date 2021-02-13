import React from "react";
import "./MostPopularStores.css";
import image1 from "../../../images/loise vuitton.png";
import image2 from "../../../images/gap.jpg";
const MostPopularStores = () => {
  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center mt-5 mb-5">
          <strong>Most Popular Stores</strong>
        </h4>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <a href="">
                <div className="card border-0">
                  <div className="card-body" style={{ height: "45vh" }}>
                    <div style={{ textAlign: "center", fontWeight: "bold" }}>
                      <p>Featured Store of the Month</p>
                      <img
                        style={{ width: "200px", height: "120px" }}
                        src={image1}
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-9 bg-light">
            <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel" data-interval="false">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
             
                        <div class="single__shop mx-1 mb-2">
                          <a href="">
                            <div
                            class="d-flex justify-content-around align-items-center"
                            >
                            <div
                              class="single__shop__logo d-flex mx-2 justify-content-center align-items-center"
                            >
                              <img
                                class=""
                                style={{width: "80px", height: "50px"}}
                                src={image1}
                              />
                            </div>
                          <div class="single__shop__details p-2">
                            <div>ADIDAS</div>
                            <div>
                              <span class="text-success">
                                <small>90% OFFER</small>
                                </span>
                            </div>
                            <div class="text-secondary">
                              <span>
                                <small>2 offers</small>

                                </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                 
                    
                </div>
                <div class="carousel-item">
             
                    <div class="single__shop mx-1 mb-2">
                      <a href="">
                        <div
                          class="d-flex justify-content-around align-items-center"
                        >
                          <div
                            class="single__shop__logo d-flex mx-2 justify-content-center align-items-center"
                          >
                            <img
                              class=""
                              style={{width: "80px", height: "50px"}}
                              src={image1}
                            />
                          </div>
                          <div class="single__shop__details p-2">
                            <div>ADIDAS</div>
                            <div>
                              <span class="text-success">
                                  <small>90% OFFER</small>
                                </span>
                            </div>
                            <div class="text-secondary">
                              <span>
                                <small>2 offer</small>
                                </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
               
                    
                      <a href="" class="single__shop mx-1 mb-2 my-0" style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px"}}><p class="my-auto">View All Shops</p></a>
                    
                </div>
            </div>
            </div>
            <a
            class="carousel-control-next carousel-control"
            href="#carouselExampleControls1"
            role="button"
            data-slide="next"
          >
             {/* <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span> */}
            <i class="fas fa-chevron-circle-right fa-2x" style={{backgroundColor: "black", boxShadow: "0 0 5px black", borderRadius:"50%",position:"absolute !important", left: "120px"}}></i>
            <span class="sr-only">Next</span>
          </a>
                </div>
                {/* <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default MostPopularStores;
