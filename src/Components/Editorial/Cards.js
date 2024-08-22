import React from "react";
import "./Cards.css";
import amarben from '../../Assets/images/Amarben-Patni.webp';
import narendra from '../../Assets/images/narendra.webp';
import swapnil from '../../Assets/images/swapnil.webp';
import rohit from '../../Assets/images/Rohit.png';
import krishna from '../../Assets/images/Krishna.jpg';
import rajni from '../../Assets/images/rajni.webp';
import dipti from '../../Assets/images/dipti.webp';
import vandana from '../../Assets/images/vandana.webp';
import sayali from '../../Assets/images/Sayali.png';
import ravi from '../../Assets/images/Ravi.png';
import bhakti from '../../Assets/images/bhakti.jpg';
import snehal from '../../Assets/images/snehal.webp';
import pooja from '../../Assets/images/pooja.webp';

import Downborder from "./Downborder";

const Cards = () => {
  return (
   <>
    <div className="editorial-card"> {/* Ensure this class is applied to the parent */}
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={amarben} alt="Amarben Patni" />
            <h5 className="mt-3">Amarben Patni</h5>
            <div className="cont">
              <p className="mb-0 text-center">Chief Sustainability Officer</p>
              <h6 className="m-0 p-1 text-success">
                <i className="fa-solid fa-envelope mx-2"></i>chiefeditor@ecroptoday.co.in
              </h6>
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={narendra} alt="Amarben Patni" />
            <h5 className="mt-3">Narendra Nor</h5>
            <div className="cont">
              <p className="mb-0 text-center">Asst. Eco-Conscious Editor</p>
              <h6 className="m-0 p-1 text-success">
                <i className="fa-solid fa-envelope mx-2"></i>editor@ecroptoday.co.in
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={swapnil} alt="Amarben Patni" />
            <h5 className="mt-3">Swapnil Tiwari</h5>
            <div className="cont">
              <p className="mb-0 text-center">Eco-Conscious Editor</p>
              <h6 className="m-0 p-1 text-success">
                <i className="fa-solid fa-envelope mx-2"></i> editor@ecroptoday.co.in

              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={rohit} alt="Amarben Patni" />
            <h5 className="mt-3">Rohit Sakpal</h5>
            <div className="cont">
              <p className="mb-0 text-center">Sustainability Editor</p>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={krishna} alt="Amarben Patni" />
            <h5 className="mt-3">Krishna Shambhu Kanu</h5>
            <div className="cont">
              <p className="mb-0 text-center">Assistant Sustainability Director</p>
              <h6 className="m-0 p-1 text-success">
                <i className="fa-solid fa-envelope mx-2"></i> krishna@ecroptoday.co.in
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={rajni} alt="Amarben Patni" />
            <h5 className="mt-3">Rajni Rajaram Dhankanthi</h5>
            <div className="cont">
              <p className="mb-0 text-center">Senior Green Practices Editor</p>
              <h6 className="m-0 p-1 text-success">
                <i className="fa-solid fa-envelope mx-2"></i>rajni@ecroptoday.co.in
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={dipti} alt="Amarben Patni" />
            <h5 className="mt-3">Dipti Suresh Chavan</h5>
            <div className="cont">
              <p className="mb-0 text-center">Sustainable Web Developer</p>
             
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={vandana} alt="Amarben Patni" />
            <h5 className="mt-3">Vandana Prajapati</h5>
            <div className="cont">
              <p className="mb-0 text-center">Chief Content Ecologist</p>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={sayali} alt="Amarben Patni" />
            <h5 className="mt-3">Sayali Jadhav</h5>
            <div className="cont">
              <p className="mb-0 text-center">Senior Eco-Friendly Designer</p>
              <h6 className="m-0 p-1 text-success">
                <i className="fa-solid fa-envelope mx-2"></i>sayali@ecroptoday.co.in
              </h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={ravi} alt="Amarben Patni" />
            <h5 className="mt-3">Ravi Gupta</h5>
            <div className="cont">
              <p className="mb-0 text-center">Environmental Design Specialist</p>
             
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={bhakti} alt="Amarben Patni" />
            <h5 className="mt-3">Bhakti Patil</h5>
            <div className="cont">
              <p className="mb-0 text-center">Eco-Outreach Coordinator</p>
             
            </div>
          </div>
        </div>
        <span class="editorial-head"><i class="fa-solid fa-user-pen"></i></span>
        <h1 class="text-center">EDITORIAL OFFICE</h1>
        <Downborder/>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={snehal} alt="Amarben Patni" />
            <h5 className="mt-3">Snehal Nagwekar</h5>
            <div className="cont">
              <p className="mb-0 text-center">Sustainability Manager</p>
             
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <img src={pooja} alt="Amarben Patni" />
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
