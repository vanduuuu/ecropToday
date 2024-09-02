import React from "react";
import "./Cards.css";

import Downborder from "./Downborder";
import Titletag from "../Titletag/Titletag";

const Cards = () => {
  const edcards=[
    {
      "name" : "Amarben Patni",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/Amarben-Patni.webp",
      "desig" : "Chief Sustainability Officer", 
      "email" : "chiefeditor@ecroptoday.co.in",
      "icon" : "fa-solid fa-envelope",
    },
    {
      "name" : "Swapnil Tiwari",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/swapnil.webp",
      "desig" : "Eco-Conscious Editor", 
      "email" : "editor@ecroptoday.co.in",
      "icon" : "fa-solid fa-envelope",
    },
    {
      "name" : "Narendra Nor",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/narendra.webp",
      "desig" : "Asst. Eco-Conscious Editor", 
      "email" : "editor@ecroptoday.co.in",
      "icon" : "fa-solid fa-envelope",
    },
    {
      "name" : "Rohit Sakpal",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/Rohit.png",
      "desig" : "Sustainability Editor", 
    },
    {
      "name" : "Krishna Shambhu Kanu",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/Krishna.jpg",
      "desig" : "Assistant Sustainability Director", 
      "email" : "krishna@ecroptoday.co.in",
      "icon" : "fa-solid fa-envelope",
    },
    {
      "name" : "Rajni Rajaram Dhankanthi",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/rajni.webp",
      "desig" : "Senior Green Practices Editor", 
      "email" : "rajni@ecroptoday.co.in",
      "icon" : "fa-solid fa-envelope",
    },
    {
      "name" : "Dipti Suresh Chavan",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/dipti.webp",
      "desig" : "Sustainable Web Developer", 
    },
    {
      "name" : "Vandana Prajapati",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/vandana.webp",
      "desig" : "Chief Content Ecologist", 
    },
    {
      "name" : "Sayali Jadhav",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/Sayali.png",
      "desig" : "Senior Eco-Friendly Designer", 
      "email" : "sayali@ecroptoday.co.in",
      "icon" : "fa-solid fa-envelope",
    },
    {
      "name" : "Ravi Gupta",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/RAVI.png",
      "desig" : "Environmental Design Specialist", 
    },
    {
      "name" : "Bhakti Patil",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/bhakti.jpg",
      "desig" : "Eco-Outreach Coordinator", 
    },
    {
      "name" : "Sweta Jha",
      "img" : "https://ecroptoday.azureedge.net/ecroptoday/shweta.png",
      "desig" : "Community Engagement Officer", 
    },
  ]
  return (
   <>
    <div className="editorial-card"> {/* Ensure this class is applied to the parent */}
      <div className="row">
        {edcards.map((cardE, index) => (
          <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={cardE.img} alt="Amarben Patni" />
            <h5 className="mt-3">{cardE.name}</h5>
            <div className="cont">
              <p className="mb-0 text-center">{cardE.desig}</p>
              <h6 className="m-0 p-1 text-success">
                <i className={`${cardE.icon} mx-2`}></i>{cardE.email}
              </h6>
            </div>
          </div>
        </div>
        ))}
        
        </div>
        <Titletag icon="fa-solid fa-user-pen"
        title="EDITORIAL OFFICE"
        />
        <Downborder/>
    <div className="row">
    <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src="https://ecroptoday.azureedge.net/ecroptoday/snehal.webp" alt="Amarben Patni" />
            <h5 className="mt-3">Snehal Nagwekar</h5>
            <div className="cont">
              <p className="mb-0 text-center">Sustainability Manager</p>
             
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src="https://ecroptoday.azureedge.net/ecroptoday/pooja.webp" alt="Amarben Patni" />
            <h5 className="mt-3">Pooja Ankush Bhise</h5>
            <div className="cont">
              <p className="mb-0 text-center">Sustainability Secretary</p>
             
            </div>
          </div>
        </div>
    </div>
      </div>



   </>
    
  );
};

export default Cards;
