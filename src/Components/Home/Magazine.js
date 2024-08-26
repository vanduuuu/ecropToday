import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Magazine.css";
import Blog from "./Blog";
import Title from "../Titleholder/Title";
import june from "../../Assets/Issues-img/june-banner.jpg";
import july from "../../Assets/Issues-img/july_magazine.jpg";
import august from "../../Assets/Issues-img/August_magzinE.webp";
import junePdf from '../../Assets/Magazine-pdf/june.pdf'
import Julypdf from '../../Assets/Magazine-pdf/july.pdf'
import augustPdf from '../../Assets/Magazine-pdf/august.pdf'
const magazinee = [
  {
    img:june,
    title:"Revolutionizing Agriculture The Future Of Farming",
    pdflink:junePdf,
    Pro_type:"Magazine",
    Published_by:"Tech Vist IT Pvt Ltd",
    Publication_M:"June",
    Mode:"Print & Online"
  },
  {
    img:july,
    title:"Ecrop Your Personal Farming Companion",
    pdflink:Julypdf,
    Pro_type:"Magazine",
    Published_by:"Tech Vist IT Pvt Ltd",
    Publication_M:"July",
    Mode:"Print & Online"
  },{
    img:august,
    title:"A Way To A Sustainable Future",
    pdflink:augustPdf,
    Pro_type:"Magazine",
    Published_by:"Tech Vist IT Pvt Ltd",
    Publication_M:"August",
    Mode:"Print & Online"
  }
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
                  <p>Product Type : {maga.Pro_type}</p>
                  <p>Published By : {maga.Published_by}</p>
                  <p>Publication Month : {maga.Publication_M}</p>
                  <p>Mode : {maga.Mode}</p>

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
