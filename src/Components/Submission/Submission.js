import React from 'react';
import Titletag from '../Titletag/Titletag';
import Downborder from '../Editorial/Downborder';
import './Submission.css';
import { Link } from 'react-router-dom';
import whup from '../../Assets/background/whyp-ecp.webp'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Submission = () => {
  return (
    <div>
      <div className='container'>
      <Breadcrumbs 
   navhome="Home"
   navnext="Article Submission"
   />
        <Titletag
          icon="fa-regular fa-newspaper"
          title="ARTICLE SUBMISSION"
        />
        <Downborder />
        <div className="sub-mm">
          <div className="sub-div">
            <h3>Guidelines For Author</h3>
            <p>Authors are requested to read the guidelines carefully before submitting an article to avoid rejection.</p>
            <Link className="ak" to="/guideline" target="_blank" rel="noopener noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Click Here
            </Link>
          </div>
        </div>
        <div className='row container55'>
        <div className='col-lg-4'>
        <div class="card">
            <h2>Submit Article</h2>
                <div class="overlay1">
                    <div class="text11">Free / Paid Article</div>
                    <Link to="/submitarticle">Submit Article</Link>
                </div>
            </div>
        </div>
        </div>
        <div class="whup-banner">
<Link to="https://wa.me/8097626333?text=" target="_blank">
<img src={whup} alt="whup"/></Link>
</div>
      </div>
    </div>
  );
};

export default Submission;
