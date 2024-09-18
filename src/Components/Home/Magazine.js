import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Magazine.css";
import Blog from "./Blog";
import Title from "../Titleholder/Title";
      
const magazinee = [
  {
    img:"https://ecroptoday.azureedge.net/ecroptoday/june-banner.jpg",
    title:"Revolutionizing Agriculture The Future Of Farming",
    pdflink:"https://ecroptoday.azureedge.net/ecroptoday/june.pdf",
    Pro_type:"Magazine",
    Published_by:"Tech Vist IT Pvt Ltd",
    Publication_M:"June",
    Mode:"Print & Online"
  },
  {
    img:"https://ecroptoday.azureedge.net/ecroptoday/july_magazine.jpg",
    title:"Ecrop Your Personal Farming Companion",
    pdflink:"https://ecroptoday.azureedge.net/ecroptoday/july.pdf",
    Pro_type:"Magazine",
    Published_by:"Tech Vist IT Pvt Ltd",
    Publication_M:"July",
    Mode:"Print & Online"
  },
  {
    img:"https://ecroptoday.azureedge.net/ecroptoday/August_magzinE.webp",
    title:"A Way To A Sustainable Future",
    pdflink:"https://ecroptoday.azureedge.net/ecroptoday/August1.pdf",
    Pro_type:"Magazine",
    Published_by:"Tech Vist IT Pvt Ltd",
    Publication_M:"August",
    Mode:"Print & Online"
  },
  {
    img:"https://ecroptoday.azureedge.net/ecroptoday/sept-coverpg.jpg",
    title:"Empowering Agriculture Ganesha's Blueprint for a Sustainable Future",
    pdflink:"https://ecroptoday.azureedge.net/ecroptoday/september.pdf",
    Pro_type:"Magazine",
    Published_by:"Tech Vist IT Pvt Ltd",
    Publication_M:"September",
    Mode:"Print & Online"
  },
]
// Define responsive breakpoints for Carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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
        <Title title='e-CROPTODAY Magazine'/>
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
          {magazinee.map((maga, index) => (
            <div className="carousel-item1" key={index}>
              <img src={maga.img} alt={`Slide ${index + 1}`} />
              <div className="overlay">
                <div className="overlay-content">
                  <h4>{maga.title}</h4>
                  <p><span>Product Type</span> : {maga.Pro_type}</p>
                  <p><span>Published By</span> : {maga.Published_by}</p>
                  <p><span>Publication Month</span> : {maga.Publication_M}</p>
                  <p><span>Mode</span> : {maga.Mode}</p>

                </div>
                <button 
                  className="view-pdf-button" 
                  onClick={() =>{window.open(`${maga.pdflink}`,'_blank');}}
                >
                  View PDF
                </button>
              </div>
            </div>
          ))}
        </Carousel>
        <Blog/>
      </div>
    </>
  );
};

export default Magazine;
