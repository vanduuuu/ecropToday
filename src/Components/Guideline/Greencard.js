import React from 'react'
import './Greencard.css'
const Greencard = () => {
  return (
    <div>
      <div className='row mt-4'>
      <div class="col-md-5 in-div py-5 me-3 mb-3">
                <div class="jj-info">
                <div class="col-md-2"><i class="fa-solid fa-users"></i></div>
                <div class="col-md-7 ">
                    <h4>Free Article</h4>
                    <p class="text-white">We will review your article, and if we find it valuable, we will publish it for free.</p>
                </div>
                </div>
                <h5 class="mt-3" style={{color:'#f5eb2f'}}>Only top 5 articles will be selected for free publication.</h5>
            </div>
            <div class="col-md-5 in-div py-5 me-3 mb-3">
                <div class="jj-info">
                <div class="col-md-2"><i class="fa-solid fa-file-word"></i></div>
                <div class="col-md-7 ">
                    <h4>Paid Article</h4>
                    <p class="text-white">If you wish to publish your article as a paid submission, Upon acceptance, we will send you an acceptance email along with payment details.</p>
                </div>
                </div>
                <h5 class="mt-3" style={{color:'#f5eb2f'}}>Fee for single article Rs. 300. (only for students)</h5>
            </div>
            
      </div>
      <h4 class="p-3 my-4 hhh">If you do not receive any acceptance email within a week, please consider it as rejected.</h4>
    </div>
  )
}

export default Greencard
