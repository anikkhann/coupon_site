import React from "react";
import "./Sidebar.css";
import images1 from "../../../images/batman.jpg";
import images2 from "../../../images/gap.jpg";
const Slider = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={images1} className="d-block w-100 imgHeight" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={images2} className="d-block w-100  imgHeight" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={images1} className="d-block w-100  imgHeight" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
