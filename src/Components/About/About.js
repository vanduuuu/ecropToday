import React from 'react'
import './About.css'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
const About = () => {
  return (
    <div>
        <div className="banner">
      <div className="overlay3"></div>
      <div className="banner-text">
        <p>A Few Words</p>
        <h1>About Us</h1>
        <p className='about-border'>Welcome To e-CROPTODAY Magazine</p>
      </div>
    </div>
<div className="container">
    <div className="row">
  {/* navtabs */}
  <Breadcrumbs 
   navhome="Home"
   navnext="About"
   />
<div class="col-lg-8 aboutt-info">
            <h1>About us</h1> 
            <p className="mb-2">Welcome to e-CROPTODAY, your premier online magazine dedicated to exploring the
            intersection of agriculture and technology. At e-CROPTODAY, we delve into the vast landscape
            of agrotech solutions that are revolutionizing modern farming practices worldwide.</p>
            <p className="mb-2">Our mission at e-CROPTODAY is to be your trusted source of insights and updates on smart
            farming, IoT applications in agriculture, cutting-edge discoveries in modern farming
            techniques, and the challenges and opportunities within the agricultural sector. We
            are committed to bridging the gap between traditional farming methods and
            innovative technologies that enhance crop production, sustainability, and profitability.</p>
            <p className="mb-2">Through in-depth articles, interviews, and analysis, e-CROPTODAY keeps you informed about
            the latest advancements in agri-technology, from precision farming to drone-based
            monitoring and data-driven decision-making. We believe in showcasing success
            stories and real-world applications that demonstrate how technology is reshaping
            the future of agriculture.</p>
            <p className="mb-2">In addition to exploring technology, e-CROPTODAY also keeps a keen eye on policy
            developments that impact farmers and crop production. We provide updates on new
            government initiatives, regulations, and incentives aimed at promoting sustainable
            farming practices and supporting agricultural communities.</p>
            <p className="mb-2">Whether you are a farmer, agrotech enthusiast, policymaker, or simply curious about
            the evolving landscape of agriculture, e-CROPTODAY invites you to join us on this
            transformative journey. Stay connected with us as we uncover the possibilities and
            challenges of tomorrow's farming solutions, all aimed at nurturing a thriving and
            resilient agricultural ecosystem.</p>
            <p className="mb-1"><span>e-CROPTODAY</span> - Where Agriculture Meets Innovation</p>

            
        </div>

    </div>
    <div className='col-lg-8 mx-auto my-4'>
    <table class="table" border="1">
  <thead>
    <tr className='text-center'><th scope="col" colspan="2"><h4>MAGAZINE PARTICULARS</h4></th></tr>
    <tr>
      <th>Title</th>
      <td>A Way To a Sustainability Future</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Frequency</th> 
      <td>Monthly</td>
    </tr>
   
    <tr>
      <th>Publisher</th>
      <td>Tech Visit IT Pvt Ltd</td>
    </tr>
    <tr>
      <th>Chief Editor</th>
      <td>Amarben Patni</td>
    </tr>
    <tr>
      <th>Copyright</th>
      <td>© 2024. All Rights Reserved by Precision Grow (A Unit of Tech Visit IT Pvt Ltd)</td>
    </tr>
    <tr>
      <th>Starting Year</th>
      <td>2024</td>
    </tr>
    <tr>
      <th>Subject</th>
      <td>Agriculture</td>
    </tr>
    <tr>
      <th>Language</th>
      <td>English</td>
    </tr>
    <tr>
      <th>Publication Format</th>
      <td>Online/Print</td>
    </tr>
    <tr>
      <th>Mobile No.</th>
      <td>+91-8097626333</td>
    </tr>
    <tr>
      <th>Phone No.</th>
      <td>+91-2248888888</td>
    </tr>
    <tr>
      <th>Email Id</th>
      <td>editor@ecroptoday.co.in</td>
    </tr>
 
    <tr>
      <th>Website</th>
      <td>ecroptoday.co.in</td>
    </tr>
    <tr>
      <th>Address</th>
      <td>Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi, Mumbai, Mumbai City, Maharashtra, 400703</td>
    </tr>
  </tbody>
</table>

    </div>
</div>
    </div>
  )
}

export default About