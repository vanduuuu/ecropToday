import React from "react";
import slide1 from "../../Assets/background/food.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Magazine.css";
import Blog from "./Blog";
import Title from "../Titleholder/Title";
//Define Api for magazine 

// Define responsive breakpoints for Carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Magazine = () => {
  return (
    <>
      <div className="container carousel-container">
        <Title title='e-CROP Magazine'/>

        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000} // Adjust speed as needed
          infinite // Enable looping
          swipeable // Allow swiping on touch devices
          draggable // Allow dragging
          keyBoardControl // Allow navigation with keyboard
          showDots // Show navigation dots
        >
          <div className="carousel-item1">
            <img src={slide1} alt="Slide 1" />
          </div>
          <div className="carousel-item1">
            <img src={slide1} alt="Slide 2" />
          </div>
          <div className="carousel-item1">
            <img src={slide1} alt="Slide 3" />
          </div>
          <div className="carousel-item1">
            <img src={slide1} alt="Slide 4" />
          </div>
          <div className="carousel-item1">
            <img src={slide1} alt="Slide 5" />
          </div>
          <div className="carousel-item1">
            <img src={slide1} alt="Slide 6" />
          </div>
          <div className="carousel-item1">
            <img src={slide1} alt="Slide 7" />
          </div>
          <div className="carousel-item1">
            <img src={slide1} alt="Slide 8" />
          </div>
        </Carousel>
        <Blog/>
      </div>
    </>
  );
};

export default Magazine;
