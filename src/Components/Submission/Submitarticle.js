import React from "react";
import Titletag from "../Titletag/Titletag";
import Downborder from "../Editorial/Downborder";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./Submitarticle.css";
import whup from '../../Assets/background/whyp-ecp.webp'

import { Link } from "react-router-dom";
const Submitarticle = () => {
  return (
    <div>
      <div className="container">
        <Breadcrumbs navhome="Home" navnext="Submit Article" />
        <Titletag title="Submit Article" />
        <Downborder />
        <div className="contwidth">
          <p>
            <i class="fa-solid fa-right-long alternate-icon"></i> We are not
            accepting academic, review, or research articles at this time.
            Please ensure your submission aligns with our guidelines.
          </p>
          <p>
            <i class="fa-solid fa-right-long alternate-icon"></i> If you don't
            receive an acceptance email within a week, consider your submission
            rejected. Please do not call/message for the same. Thank you for
            your understanding.
          </p>
          <h2 class="text-center">
            Only Best article will be accepted for publication
          </h2>
          <div className="formwidth">
            <form class="border p-4 rounded">
              <label for="">Mode of Publication *</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with dropdown button"
                />
                <button
                  class="btn btn1 btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="#">
                      Free *
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Paid Article
                    </a>
                  </li>
                </ul>
              </div>
              <div class="form-text mb-3">
                * Only Top 5 articles will be selected for free publication.
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Name *
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">
                  Designation *
                </label>
                <input type="text" class="form-control" />
              </div>
              <div>
                <label for="">Upload Your Article *</label>
                <input type="file" class="form-control" />
              </div>
              <div>
                <div>
                  <p class="mt-3 text-danger">checkbox**</p>
                  <label class="checkbox-container mb-3">
                    <input type="checkbox" class="cc" />
                    <span class="px-2">
                      {" "}
                      I've read the magazine's guidelines, ensuring my article
                      aligns with its format and content requirements. If my
                      article does not comply with these guidelines, it will be
                      rejected.
                    </span>
                  </label>
                </div>
                <div>
                  <label class="checkbox-container mb-3">
                    <input type="checkbox" />
                    <span class="px-2">
                      "I accept that the articles given by me are my own views,
                      the content written in this article is not taken from any
                      source, if any error is found in it, then I will be
                      responsible for it"
                    </span>{" "}
                  </label>
                </div>
              </div>

              <button type="submit" class="btn subbb mt-4 rounded-0 newbtn">
                Submit
              </button>
            </form>
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

export default Submitarticle;
