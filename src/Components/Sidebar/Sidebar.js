import React from "react";
import Title from "../Titleholder/Title";

import './Sidebar.css'
import { Link } from "react-router-dom";
const Sidebar = () => {
  const sidebarr = [
    {
      img : "https://ecroptoday.azureedge.net/ecroptoday/climate-change1.webp",
      desc : "Climate Change Threatens Vital Soil Biodiversity | Impact on Soil-Dwelling Species",
      authore :'Amarben Patni',
      date : '18 July 24',
      linkkk:"https://precisiongrowindia.blogspot.com/impact-of-climate-change-on-soil-dwelling-species"
    },
    {
      img : "https://ecroptoday.azureedge.net/ecroptoday/gdp.webp",
      desc : "Understanding Green GDP And Its Implications For Sustainable Development",
      authore : 'Amarben Patni',
      date : '05 April 24',
      linkkk:"https://precisiongrowindia.blogspot.com/green-gdp-sustain"
    },
    {
      img : "https://ecroptoday.azureedge.net/ecroptoday/Drone-soil.webp",
      desc : "Drone Soil Analysis: Multispectral Remote Sensing for Soil Mapping",
      authore : 'Amarben Patni',
      date : '05 April 24',
      linkkk:"https://precisiongrowindia.blogspot.com/drone-soil-analysis-multispectral"
    }
  ]
  return (
    <>
      <div class="col-lg-4 col-md-12 col-12  p-1 rounded sidebar-outer">
        <div class="shadow rounded p-3 sidebar-div">
        <Title title='Search'/>
        <div class="search-container">
            <input
              type="text"
              class="search-input"
              placeholder="Type here..."
            />
            <button type="submit" class="search-button">
              <img src="https://ecroptoday.azureedge.net/ecroptoday/search.png" alt="Search" />
            </button>
          </div>
        </div>
        <div class="shadow rounded p-3  recent-info-outer mt-4 sidebar-div">
          <Title title='Recent Post'/>
          <ul style={{listStyle:'none',padding:'0'}}>
            {sidebarr.map((sidebar1, index) => (
  <li className={`my-4 ${
    index === 0 ? "active" : ""
  }`}>
  <div class="pt-2 col-12 row recent-info-inner">
    <div class="col-md-4 col-4">
     <img
        src={sidebar1.img} className="w-100"
        alt={sidebar1.alt}
      />
    </div>
    <div class="col-md-8 col-8">
      <h6>
        <Link
          to={sidebar1.linkkk}
          target="_blank"
        >
         {sidebar1.desc}
        </Link>
      </h6>
      <div class="ad-info">
        <i class="fa-regular fa-user mx-1"></i>{" "}
        <span class="fw-bold">{sidebar1.authore}</span>
        <i class="fa-solid fa-calendar-days mx-2"></i>
        <span class="fw-bold">{sidebar1.date}</span>
      </div>
    </div>
  </div>
</li>
            ))}
          
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
