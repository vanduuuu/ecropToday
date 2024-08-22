import React from "react";
import slide1 from "../../Assets/background/food.webp";
import slide2 from "../../Assets/background/gdp.webp";
import slide3 from "../../Assets/background/organic-farm.webp";
import "./Home.css";
import Magazine from "./Magazine";
import Iconslider from "../Iconslider/Iconslider";
const Home = () => {
  const slides = [
    {
      img: slide1,
      title: "Amarben Patni",
      date: "30 Aug",
    },
    {
      img: slide2,
      title: "Amarben Patni",
      date: "30 Aug",
    },
    {
      img: slide3,
      title: "Amarben Patni",
      date: "30 Aug",
    },
  ];
  return (
    <>
    {/* slider section  */}
      <div className="outer-container">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <div id="carouselExampleCaptions" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    {slides.map((slide, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <img
                          src={slide.img}
                          className="d-block w-100 h-zoom"
                          alt={slide.alt}
                        />
                        {/* <div className="container"> */}
                          <div className="carousel-caption d-none d-md-block">
                            <div className="col-12 d-flex justify-content-center justify-space-between">
                              <h5 className="col-md-4">
                                <i className="fa-regular fa-user mx-2"></i>
                                {slide.title}
                              </h5>
                              <p className="col-md-4">
                                <i className="fa-solid fa-calendar-days mx-2"></i>
                                {slide.date}
                              </p>
                            </div>
                            <button className="btn btn-success">
                              Read More
                            </button>
                          </div>
                        </div>
                      // </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hh">
              <div className="row ">
                <div className="col-md-6">
                  <div className="carousel-inner1">
                    <img src={slide1} className="d-block w-100 h-zoom" alt="" />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="carousel-inner1">
                    <img src={slide1} className="d-block w-100 h-zoom" alt="" />
                  </div>
                </div>
                <div className="col-md-12">
                <div className="carousel-inner1">
                    <img src={slide1} className="d-block w-100 h-zoom" alt="" />
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* magazine section */}
      <Magazine/>
      <Iconslider/>
    </>
  );
};

export default Home;
