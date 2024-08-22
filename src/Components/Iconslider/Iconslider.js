import React from 'react';
import './Iconslider.css'
import imgg1 from '../../Assets/icons/part-1.webp'
import imgg2 from '../../Assets/icons/part-3.webp'
import imgg3 from '../../Assets/icons/part-4.webp'
import imgg4 from '../../Assets/icons/part-5.webp'
import imgg5 from '../../Assets/icons/part-6.webp'
import imgg6 from '../../Assets/icons/part-7.webp'
import imgg7 from '../../Assets/icons/part-8.webp'
import imgg8 from '../../Assets/icons/part-9.webp'
import imgg9 from '../../Assets/icons/part-10.webp'
import imgg10 from '../../Assets/icons/part-11.webp'
import imgg11 from '../../Assets/icons/part-12.webp'
import imgg12 from '../../Assets/icons/part-13.webp'
import imgg13 from '../../Assets/icons/part-14.webp'
import imgg14 from '../../Assets/icons/part-15.webp'

const Iconslider = () => {
    const iconslider = [
        {
            img : imgg1
        },
        {
            img : imgg2
        },
        {
            img : imgg3
        },
        {
            img : imgg4
        },
        {
            img : imgg5
        },
        {
            img : imgg6
        },
        {
            img : imgg7
        },
        {
            img : imgg8
        },
        {
            img : imgg9
        },
        {
            img : imgg10
        },
        {
            img : imgg11
        },
        {
            img : imgg12
        },
        {
            img : imgg13
        },
        {
            img : imgg14
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
