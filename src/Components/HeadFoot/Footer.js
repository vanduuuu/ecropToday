import React from "react";
import "./Footer.css"; // Import custom CSS
import techvisit from '../../Assets/icons/techvisit.webp';
import footlogo from '../../Assets/images/vlogo.jpg';
const Footer = () => {
  return (
    <footer>
      <div className="foot container">
        <div className="row foot-area">
          <div className="col-lg-3 col-md-5 foot-1 text-center">
            <a href="https://ecrop.co.in/">
              <img src={footlogo} width="200" alt="e-CROP" />
            </a>
            <a
              className="techvisit"
              href="https://www.techvisit.in/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={techvisit} alt="Tech Visit" className="mt-4" width="160"/>
            </a>
            <div className="power2 mt-3">
              <p className="fw-bold" style={{ color: "orange" }}>
                Powered by
              </p>
              <img
                src="https://precisiongrow.co.in/assets/img/sap-b1.webp"
                alt="SAP B1"
                width="200"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-7 foot-2">
            <h4 className="mb-3">Welcome to e-CROP Magazine</h4>
            <p>
              Ecrop, your go-to online hub for agri-tech, explores modern
              farming's nexus. Discover innovations enhancing sustainability,
              profitability, and crop production.
            </p>
            <p className="fw-bold mb-2" style={{ color: "orange" }}>
              Follow Us On
            </p>
            <ul className="social2">
              {[
                {
                  link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow",
                  icon: "twitter.png",
                },
                {
                  link: "https://www.facebook.com/electroniccrop/",
                  icon: "fb.png",
                },
                {
                  link: "https://www.instagram.com/electronic_crop/",
                  icon: "insta.png",
                },
                {
                  link: "https://www.linkedin.com/company/electronic-crop/",
                  icon: "linkdin.png",
                },
                {
                  link: "https://www.youtube.com/channel/UCt1nu8YiUMjnvckNLfepa5g",
                  icon: "ytb.png",
                },
                {
                  link: "https://precisiongrowindia.blogspot.com/",
                  icon: "blog.png",
                },
                { link: "#", icon: "flicker.png" },
                {
                  link: "https://on.soundcloud.com/BTa2Q",
                  icon: "soundcloud.png",
                },
              ].map((social, index) => (
                <li key={index}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <img
                      src={`https://precisiongrow.co.in/assets/img/${social.icon}`}
                      alt={social.icon}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 foot-3">
            <h4>Recent Posts</h4>
            <ul className="recent-posts">
              {[
                {
                  link: "green-gdp.php",
                  title:
                    "Understanding Green GDP And Its Implications For Sustainable Development",
                },
                {
                  link: "Agriculture-Revolution.php",
                  title:
                    "Revolutionizing Agriculture With Automated Satellite Monitoring Service",
                },
                {
                  link: "machine-learning-crop-mapping.php",
                  title:
                    "The Role Of Machine Learning In Crop Mapping: Techniques And Applications",
                },
                {
                  link: "oxygen-producing-plant.php",
                  title: "15 Highest Oxygen-Producing Plants For Your Garden",
                },
              ].map((post, index) => (
                <li key={index}>
                  <a href={post.link} className="aaa">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 foot-4">
            <h4 className="mb-3">Get in Touch and Start Your Journey to Success</h4>
            <ul className="contact-info">
              {[
                {
                  icon: "fa-house",
                  title: "Regd. Office",
                  info: "Plot No 80/81, Shop No 155, Vashi Plaza, Sector 17 Vashi, Mumbai, Mumbai City, Maharashtra, 400703",
                },
                {
                  icon: "fa-house",
                  title: "Project Office",
                  info: "61, City Tower, Unit No 2, Dr. S.S. Rao Road, Parel, Mumbai, 400012",
                },
                { icon: "fa-phone", title: "Phone", info: "+91 8097626333" },
              ].map((contact, index) => (
                <li key={index} className="d-flex mb-3">
                  <div className="foot-icon">
                    <i className={`fa-solid ${contact.icon}`}></i>
                  </div>
                  <div className="foot-i-info">
                    <strong style={{ color: "orange" }}>
                      {contact.title}:
                    </strong>
                    <p>{contact.info}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center cpy-right mt-3">
        <p>
          © 2024. All Rights Reserved by{" "}
          <span style={{ color: "orange" }}>
            Precision Grow (A Unit of Tech Visit IT Pvt Ltd)
          </span>
        </p>
      </div>
      <a
        id="scroll-top"
        style={{ display: "none" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span></span>
      </a>
      <a
        href="https://wa.me/+918097626333?text=Welcome To e-CROP Magazine"
        className="whatsapp_btn circle-50"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  );
};

export default Footer;
