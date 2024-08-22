import React from "react";
import './Topnavbar.css'
const Topnavbar = () => {
  return (
    <div>
      <div class="topbar-one">
        <div class="container-fluid">
          <div class="topbar-one__inner">
            <div class="topbar-one__social">
              <span>
                <a href="https://www.linkedin.com/company/electronic-crop/">
                  <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                  <span class="sr-only">linkedin</span>
                </a>
              </span>
              <span>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fprecision_grow">
                  <i class="fab fa-facebook-f" aria-hidden="true"></i>
                  <span class="sr-only">twitter</span>
                </a>
              </span>
              <span>
                <a href="https://www.facebook.com/electroniccrop/">
                  <i class="fab fa-twitter" aria-hidden="true"></i>
                  <span class="sr-only">Facebook</span>
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/electronic_crop/">
                  <i class="fab fa-instagram" aria-hidden="true"></i>
                  <span class="sr-only">Instagram</span>
                </a>
              </span>
            </div>
            <ul class="list-unstyled topbar-one__info">
              <li class="topbar-one__info__item addr1">
                <i class="fa-solid fa-location-dot"></i>
                <a href="/" target="_blank">
                  61, City Tower, Unit No 2, Parel, Mumbai, 400012
                </a>
              </li>
              <li class="topbar-one__info__item">
                <i class="fa-solid fa-envelope"></i>
                <a href="/">editor@ecrop.co.in</a>
              </li>
              <li class="topbar-one__info__item">
                <i class="fa-solid fa-phone-volume"></i>
                <a href="/">+91 - 8097626333</a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnavbar;
