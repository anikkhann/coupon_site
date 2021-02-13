import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
  faChevronCircleLeft,
  faChevronCircleRight,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "../../../images/loise vuitton.png";
import image2 from "../../../images/gap.jpg";
import './MostPopularStores2.css';
const MostPopularStores2 = () => {
  return (
    <div className="container">
      <div class="row most__popular__store mt-5">
        <h4
          class="w-100 mb-5"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Most Popular Stores
        </h4>
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-3 feature__store">
              <a href="">
                <div class="card border-0">
                  <div class="card-body" style={{ height: "45vh" }}>
                    <div style={{ textAlign: "center", fontWeight: "bold" }}>
                      <p>Featured Store of the Month</p>
                      <img style={{ width: "200px", height: "120px" }} src={image1} />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-md-9  bg-light">
              <div
                id="carouselExampleControls1"
                class="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="single__shop mx-1 mb-2 ">
                      <a href="">
                        <div class="d-flex justify-content-around align-items-center ">
                          <div class="single__shop__logo d-flex mx-2 justify-content-center align-items-center">
                            <img
                              class=""
                              style={{ width: "80px", height: "50px" }}
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
                  <div class="carousel-item caro">
                    <div class="single__shop mx-1 mb-2">
                      <a href="">
                        <div class="d-flex justify-content-around align-items-center">
                          <div class="single__shop__logo d-flex mx-2 justify-content-center align-items-center">
                            <img
                              class=""
                              style={{ width: "80px", height: "50px" }}
                              src={image2}
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

                    <a
                      href=""
                      class="single__shop mx-1 mb-2 my-0"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "25px",
                      }}
                    >
                      <p class="my-auto">View All Shops</p>
                    </a>
                  </div>
                </div>
              </div>
               <a
                class="carousel-control-prev carousel-control"
                href="#carouselExampleControls1"
                role="button"
                data-slide="prev"
              >
                <FontAwesomeIcon
                  style={{
                    backgroundColor: "black",
                    boxShadow: "0 0 5px black",
                    borderRadius: "50%",
                    
                    position: "absolute",
                    top:"950px",
                    left: "380px",
                  }}
                  icon={faChevronCircleLeft}
                />
               
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next carousel-control"
                href="#carouselExampleControls1"
                role="button"
                data-slide="next"
              >
                <FontAwesomeIcon
                  style={{
                    backgroundColor: "black",
                    boxShadow: "0 0 5px black",
                    borderRadius: "50%",
                    position: "absolute",
                    top:"950px",
                    left: "380px",
                 
                  }}
                  icon={faChevronCircleRight}
                />
              
                <span class="sr-only">Next</span>
              </a> 
           
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularStores2;
