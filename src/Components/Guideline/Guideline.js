import React from "react";
import Titletag from "../Titletag/Titletag";
import Downborder from "../Editorial/Downborder";
import "./Guideline.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Greencard from "./Greencard";
import Whitecard from "./Whitecard";
const Guideline = () => {
  return (
    <div>
      <div className="container">
        <Breadcrumbs navhome="Home" navnext="Guideline" />
        <Titletag
          icon="fa-solid fa-users-between-lines"
          title="GUIDELINES FOR AUTHOR"
        />
        <Downborder />
        <div className="guidediv">
          <ul>
            <li>
              <h5>Membership Not Required:</h5>
              <p>
                Authors can submit articles <b>free of charge</b> without any
                membership.
              </p>
            </li>
            <li>
              <h5>Relevant Content:</h5>
              <p>
                Authors are encouraged to submit articles on agriculture that
                benefit our readers and{" "}
                <b>promote agri-preneurship in India.</b>
              </p>
            </li>
            <li>
              <h5>Authenticity:</h5>
              <p>
                Authors are responsible for ensuring the{" "}
                <b>authenticity of their content.</b> Plagiarized articles will
                not be published. The Magazine will not be liable for any
                plagiarized content; this responsibility rests solely with the
                author. Please make sure your manuscript is free from plagiarism
                before submission since the Magazine Board does not conduct
                plagiarism checks.
              </p>
            </li>
            <li>
              <h5>Submission Process:</h5>
              <p>
                Articles should be submitted through our website's designated
                article submission column.{" "}
                <b>Articles sent via email will not be accepted.</b>
              </p>
            </li>
            <li>
              <h5>Publication Delivery:</h5>
              <p>
                The published article (soft copy) will be emailed to you.
                Additionally, the PDF version can be obtained from our website.
              </p>
            </li>
            <li>
              <h5>Article Acceptance/Rejection:</h5>
              <p>
                The selection of articles for publication is at the{" "}
                <b>discretion of the Reviewer Board.</b>
              </p>
            </li>
            <li>
              <h5>Publication Timeline:</h5>
              <p>
                While we strive to publish all articles in upcoming issues,
                authors are requested to be patient.{" "}
                <b>
                  Your article may be included in the subsequent issue of the
                  magazine.
                </b>
              </p>
            </li>
            <li>
              <h5>Queries Regarding Articles:</h5>
              <p>
                We do not send acceptance notifications directly to authors. If
                corrections are needed, we will contact you via email.
              </p>
            </li>
          </ul>
        </div>
        <Titletag title="About Article Fee" />
        <Downborder />
        <Greencard />
        <Titletag title="About Article" />
        <Downborder />
        <Whitecard />
      </div>
    </div>
  );
};

export default Guideline;
