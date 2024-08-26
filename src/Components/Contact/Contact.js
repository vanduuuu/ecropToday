import React from 'react';
import './Contact.css'; // Ensure this file is in the src folder or adjust the path accordingly
 

const Contact = () => {
 
  

  return (
    <>

<main>
<div className="container" data-aos="fade-up">
<div id="contact" className="contact section-bg custom-bg">
              <div className='text-center'>
  <h6>SAY HELLO TO US</h6>
  <h1>Reach out and connect</h1>
  <p>Reach out and connect with us! We're eager to hear from you. Whether you have a burning question, a brilliant idea, or simply want to say hello, we're here to listen. Get in touch with our friendly team through email, phone, or by filling out our online contact form. You can also connect with us on social media for the latest updates and engaging discussions. We value your feedback and look forward to building a lasting relationship with you.</p>
  </div>
            
          
              <div className='C-info-here'>
             <div className="row">
              
             <div className="col-md-6">
           
           <h6>Publisher Information</h6>
           <h1>Publishing Body</h1>
           <h5>TECH VISIT IT PVT LTD</h5>
           <h6>Address</h6>
             <h5>Regd Office:</h5>
             <p>Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi, Mumbai, Mumbai City, Maharashtra, 400703</p>
             <h5>Project Office:</h5>
             <p>61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012</p>
             <h1>Phone</h1>
             <div className="row">
               <div className="col-lg-6 col-md-12">
                 <ul style={{listStyle:'none'}}>
                   <li><img className="imgh" src="https://precisiongrow.co.in/assets/img/icon/india-flag.webp" loading="lazy" alt="" /><h6>India</h6></li>
                   <li><span>MOBILE</span> : +91 - 8097626333</li>
                 </ul>
               </div>
               <div className="col-lg-6 col-md-12">
               <h1>Send us an email</h1>
               <h5><span>mail@ecroptoday.co.in</span></h5>
               </div>
             </div>
        

           </div>
              <div className="col-md-6">
                <div className='map-border'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d101433.85411961254!2d73.05261854442173!3d19.127030012503543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18d9a0f2377%3A0xeb69a81457fd381d!2sVashi%20Plaza!5e0!3m2!1sen!2sin!4v1711518378438!5m2!1sen!2sin" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
             </div>
            </div>
            <div className="col-lg-10 mx-auto">
                <form action="/" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="">Name *</label>
                      <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label htmlFor="">Email Address *</label>
                      <input type="email" className="form-control" name="email" id="email" placeholder="Enter your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="">Phone *</label>
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Enter your phone" required />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="">Your Message *</label>
                    <textarea className="form-control" name="message" rows="5" placeholder="Your additional messages..." required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
          </div>
        </div>
      </main>

    
  
    </>
  );
};

export default Contact;
