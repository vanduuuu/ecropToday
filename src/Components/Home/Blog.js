import React, { useState } from "react";
import Title from "../Titleholder/Title";
import slide1 from "../../Assets/background/food.webp";
import { Link } from "react-router-dom";
import "./Blog.css";
import Sidebar from "../Sidebar/Sidebar";

const Blog = () => {
  // Sample data
  const allPosts = [
    {
      "title": "1Climate Skills: A Sustainable Career Path",
      "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
      "image": slide1,
      "excerpt": "Climate change is a long-term change in the average weather patterns...",
      "author": "AMARBEN PATNI",
      "date": "July 19, 2024"
    },
    {
      "title": "2Climate Skills: A Sustainable Career Path",
      "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
      "image": slide1,
      "excerpt": "Climate change is a long-term change in the average weather patterns...",
      "author": "AMARBEN PATNI",
      "date": "July 19, 2024"
    },
    {
      "title": "3Climate Skills: A Sustainable Career Path",
      "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
      "image": slide1,
      "excerpt": "Climate change is a long-term change in the average weather patterns...",
      "author": "AMARBEN PATNI",
      "date": "July 19, 2024"
    },
    {
      "title": "4Climate Skills: A Sustainable Career Path",
      "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
      "image": slide1,
      "excerpt": "Climate change is a long-term change in the average weather patterns...",
      "author": "AMARBEN PATNI",
      "date": "July 19, 2024"
    },
    {
        "title": "5Climate Skills: A Sustainable Career Path",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": slide1,
        "excerpt": "Climate change is a long-term change in the average weather patterns...",
        "author": "AMARBEN PATNI",
        "date": "July 19, 2024"
      },
      {
        "title": "6Climate Skills: A Sustainable Career Path",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": slide1,
        "excerpt": "Climate change is a long-term change in the average weather patterns...",
        "author": "AMARBEN PATNI",
        "date": "July 19, 2024"
      },
      {
        "title": "7Climate Skills: A Sustainable Career Path",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": slide1,
        "excerpt": "Climate change is a long-term change in the average weather patterns...",
        "author": "AMARBEN PATNI",
        "date": "July 19, 2024"
      },
      {
        "title": "8Climate Skills: A Sustainable Career Path",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": slide1,
        "excerpt": "Climate change is a long-term change in the average weather patterns...",
        "author": "AMARBEN PATNI",
        "date": "July 19, 2024"
      },
      {
        "title": "9Climate Skills: A Sustainable Career Path",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": slide1,
        "excerpt": "Climate change is a long-term change in the average weather patterns...",
        "author": "AMARBEN PATNI",
        "date": "July 19, 2024"
      },
      {
        "title": "10Climate Skills: A Sustainable Career Path",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": slide1,
        "excerpt": "Climate change is a long-term change in the average weather patterns...",
        "author": "AMARBEN PATNI",
        "date": "July 19, 2024"
      },
      {
        "title": "11Climate Skills: A Sustainable Career Path",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": slide1,
        "excerpt": "Climate change is a long-term change in the average weather patterns...",
        "author": "AMARBEN PATNI",
        "date": "July 19, 2024"
      },
      {
        "title": "12Climate Skills: A Sustainable Career Path",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": slide1,
        "excerpt": "Climate change is a long-term change in the average weather patterns...",
        "author": "AMARBEN PATNI",
        "date": "July 19, 2024"
      },
      {
        "title": "13Climate Skills: A Sustainable Career Path",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": slide1,
        "excerpt": "Climate change is a long-term change in the average weather patterns...",
        "author": "AMARBEN PATNI",
        "date": "July 19, 2024"
      },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Logic for displaying current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Logic for changing page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Handle previous and next
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, pageNumbers.length));

  return (
    <>
      <Title title="Featured Blogs" />
      <div className="">
        <div className="row">
          
            <div className="col-lg-8 col-md-12 mb-4" >
            {currentPosts.map((blog, index) => (
              <div className="card border-0 shadow" key={index}>
                <div className="row g-0">
                  <div className="col-lg-4 col-md-4">
                    <Link to={blog.link} target="_blank">
                      <img
                        src={blog.image}
                        className="img-fluid"
                        alt={blog.title}
                      />
                    </Link>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to={blog.link} target="_blank">
                          {blog.title}
                        </Link>
                      </h4>
                      <p className="card-text">
                        {blog.excerpt}
                      </p>
                      <div className="ad-info mb-2">
                        <small className="text-body-secondary">
                          <i className="fa-regular fa-user mx-1"></i>{" "}
                          <span className="fw-bold">{blog.author}</span>
                          <i className="fa-solid fa-calendar-days mx-2"></i>
                          <span className="fw-bold">{blog.date}</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               ))}
            </div>
            
         
         {/* sidebar here */}
            <Sidebar/>
         {/* Navigation here */}
           <div className="col-md-8">
           <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="page-link"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {pageNumbers.slice(
              Math.max(currentPage - 2, 0),
              Math.min(currentPage + 1, pageNumbers.length)
            ).map(number => (
              <li key={number} className="page-item">
                <button
                  className={`page-link ${currentPage === number ? 'active' : ''}`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link"
                onClick={nextPage}
                disabled={currentPage === pageNumbers.length}
              >
                Next
              </button>
            </li>
          </ul>
        </nav> 
           </div>
        </div>
     
      </div>
    </>
  );
};

export default Blog;
