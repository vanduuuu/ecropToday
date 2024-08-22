import React from 'react'
import './Editorial.css'
import Downborder from './Downborder'
import Cards from './Cards'
import { Link } from 'react-router-dom'
const Editorial = () => {
  return (
    <div>
        <div className="container">
        <nav aria-label="breadcrumb" class="breadcrumbb mt-3">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link class="text-decoration-none text-secondary" to="/home">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Editorial board</li>
        </ol>
        </nav>
        <div className='editorial-card'>
        <span class="editorial-head"><i class="fa-solid fa-user-pen"></i></span>
        <h1 class="text-center">EDITORIAL BOARD</h1>
        <Downborder/>
        <Cards/>
        </div>
        </div>
    </div>
  )
}

export default Editorial