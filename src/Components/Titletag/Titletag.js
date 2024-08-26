import React from 'react'
import './Titletag.css'
const Titletag = ({icon, title}) => {
  return (
    <div>
       <div className='editorial-card'>
        <span class="editorial-head"><i className={icon}></i></span>
        <h1 class="text-center">{title}</h1>
      
        </div>
    </div>
  )
}

export default Titletag
