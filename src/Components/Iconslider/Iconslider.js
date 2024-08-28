import React from 'react';
import './Iconslider.css'


const Iconslider = () => {
    const iconslider = [
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-1.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-3.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-4.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-5.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-6.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-7.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-8.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-9.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-10.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-11.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-12.webp"
        },
        {
            img :"https://ecroptoday.azureedge.net/ecroptoday/part-13.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-14.webp"
        },
        {
            img : "https://ecroptoday.azureedge.net/ecroptoday/part-15.webp"
        }
    ]
  return (
    <div className="icon-slider">
      <div className="icon-slide-track">
        {iconslider.map((slidee,index) => (
  <div className={`icon-slide ${
    index === 0 ? "active" : ""
  }`} >
  <img src={slidee.img} height="100" width="200" alt={slidee.alt} />
</div>
        ))}
      
   
      </div>
    </div>
  );
};

export default Iconslider;
