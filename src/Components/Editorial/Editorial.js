import React from 'react'
import './Editorial.css'
import Downborder from './Downborder'
import Cards from './Cards'
import Titletag from '../Titletag/Titletag'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
const Editorial = () => {
  return (
    <div>
        <div className="container">
   <Breadcrumbs 
   navhome="Home"
   navnext="Editorial"
   />
       <Titletag 
       icon="fa-solid fa-user-pen"
       title="EDITORIAL BOARD"
       />
        <Downborder/>
        <Cards/>
        </div>
    </div>
  )
}

export default Editorial