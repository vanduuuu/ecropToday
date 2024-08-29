import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Topnavbar from "./Topnavbar";
import './Subnavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Subnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overlay-active");
    } else {
      document.body.classList.remove("overlay-active");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overlay-active");
    };
  }, [isOpen]);

  return (
    <>
      <Topnavbar />
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <div className="logoimgMob">
            <Link className="navbar-brand w-100" to="/">
              <img src='https://ecroptoday.azureedge.net/ecroptoday/vlogo.jpg' alt="" />
            </Link>
          </div>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            {isOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
          <div
            className={`navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/archive' ? 'active' : ''}`}
                  to="/archive"
                >
                  Archives
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="https://ecrop.co.in/"
                  target="_blank"
                >
                  e-CROP
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/editorial' ? 'active' : ''}`}
                  to="/editorial"
                >
                  Editorial Board
                </Link>
              </li>
              <li className="nav-item logoimg">
                <Link className="navbar-brand" to="https://ecroptoday.co.in/" target="_blank">
                  <img src='https://ecroptoday.azureedge.net/ecroptoday/vlogo.jpg' alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/guideline' ? 'active' : ''}`}
                  to="/guideline"
                >
                  Guidelines For Author
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/submission' ? 'active' : ''}`}
                  to="/submission"
                >
                  Article Submission
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Subnavbar;
