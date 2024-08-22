import React from "react";
import Title from "../Titleholder/Title";
import search from '../../Assets/icons/search.png';
import s1img from '../../Assets/background/organic-farm.webp';
import s2img from '../../Assets/background/food.webp';
import s3img from '../../Assets/background/gdp.webp';
import './Sidebar.css'
const Sidebar = () => {
  const sidebarr = [
    {
      img : s1img,
      desc : "Understanding Green GDP And Its Implications For Sustainable Development",
      authore : ' Amarben Patni',
      date : '30 Aug 24',
    },
    {
      img : s2img,
      desc : "Understanding Green GDP And Its Implications For Sustainable Development",
      authore : ' Amarben Patni',
      date : '30 Aug 24',
    },
    {
      img : s3img,
      desc : "Understanding Green GDP And Its Implications For Sustainable Development",
      authore : ' Amarben Patni',
      date : '30 Aug 24',
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
              <img src={search} alt="Search" />
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
        <a
          href="https://precisiongrowindia.blogspot.com/green-gdp-sustain"
          target="_blank"
        >
         {sidebar1.desc}
        </a>
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
