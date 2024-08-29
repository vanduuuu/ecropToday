import React, { useState } from "react";
import Title from "../Titleholder/Title";
import { Link } from "react-router-dom";
import "./Blog.css";
import Sidebar from "../Sidebar/Sidebar";

const Blog = () => {
  // Sample data
  const allPosts = [
    {
      "title": "Climate Skills: A Sustainable Career Path",
      "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
      "image": "https://ecroptoday.azureedge.net/ecroptoday/CLIMATE-SKILLS.webp",
      "excerpt": "Climate change is a long-term change in the average weather patterns...",
      "author": "AMARBEN PATNI",
      "date": "July 19, 2024"
    },
    {
      "title": "Innovative Marine Cloud Brightening Technology Tested to Combat Global Warming",
      "link": "https://precisiongrowindia.blogspot.com/marine-cloud-brightening-technology-combat-global-warming",
      "image": "https://ecroptoday.azureedge.net/ecroptoday/innovative-marine-cloud.jpg",
      "excerpt": "In the face of increasing global temperatures and unprecedented climate change...",
      "author": "AMARBEN PATNI",
      "date": "June 21, 2024"
    },
    {
      "title": "Boosting Job Creation Through Sustainability: Renewable Energy, EVs, and Green Practices",
      "link": "https://precisiongrowindia.blogspot.com/blog-post_18",
      "image": "https://ecroptoday.azureedge.net/ecroptoday/Sustainability_Sector1.jpg",
      "excerpt": "In recent years, the term “sustainability” has surged in popularity, driven...",
      "date": "July 19, 2024"
    },
    {
      "title": "Climate Change Threatens Vital Soil Biodiversity | Impact on Soil-Dwelling Species",
      "link": "https://precisiongrowindia.blogspot.com/2024/06/impact-of-climate-change-on-soil-dwelling-species.html",
      "image": "https://ecroptoday.azureedge.net/ecroptoday/climate-change1.webp",
      "excerpt": "Soil-dwelling creatures are crucial for Earth's carbon cycle. Thousands of species, like mites and springtails...",
      "author": "AMARBEN PATNI",
      "date": "July 18, 2024"
    },
    {
        "title": "Understanding Carbon Footprint: Impact, Importance, and How to Reduce It",
        "link": "https://precisiongrowindia.blogspot.com/understanding-carbon-footprint-impact-reduce",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/carbon-footprint.jpg",
        "excerpt": "Every time you charge your phone, start your bike, use a paper to write, or various...",
        "author": "AMARBEN PATNI",
        "date": "May 25, 2024"
      },
      {
        "title": "Discover the Rich Tapestry of Soils in India: A Journey Through Nature's Palette",
        "link": "https://precisiongrowindia.blogspot.com/2024/05/rich-types-of-indian-soils.html",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/type-soil.jpg",
        "excerpt": "The vast landscape of India is diverse in its availability of soil all across its length...",
        "author": "AMARBEN PATNI",
        "date": "May 21, 2024"
      },
      {
        "title": "Understanding How Rainfall Affects Soil Erosion: The Physics Behind It",
        "link": "https://precisiongrowindia.blogspot.com/climate-skills-sustainable-career-path",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/17-MAY.jpg",
        "excerpt": "How rainfall interacts with soil plays a significant role in causing soil erosion, a major issue...",
        "author": "AMARBEN PATNI",
        "date": "May 17, 2024"
      },
      {
        "title": "Why Soil Erosion is a Major Challenge for Sustainable Soil Management",
        "link": "https://precisiongrowindia.blogspot.com/blog-post_16",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/16-may2.jpg",
        "excerpt": "Despite almost a century of research and extension efforts, soil erosion by water...",
        "author": "AMARBEN PATNI",
        "date": "May 16, 2024"
      },
      {
        "title": "Unlocking Synergies: How the Paris Agreement and the 2030 Agenda Work Hand-in-Hand for a Sustainable Future",
        "link": "https://precisiongrowindia.blogspot.com/paris-agreement-2030-agenda-sustainable-development-connections",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/fcfc.webp",
        "excerpt": "The 2030 Agenda and the Paris Agreement are both universal visions and are both based on being...",
        "author": "AMARBEN PATNI",
        "date": "May 11, 2024"
      },
      {
        "title": "Drone Soil Analysis: Multispectral Remote Sensing for Soil Mapping",
        "link": "https://precisiongrowindia.blogspot.com/drone-soil-analysis-multispectral",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/Drone-soil.webp",
        "excerpt": "Making farmland Sustainable and productive for a long period has become a pressing...",
        "date": "May 9, 2024"
      },
      {
        "title": "Unlocking Insights: How Satellite Remote Sensing Revolutionizes Forest Fire Detection",
        "link": "https://precisiongrowindia.blogspot.com/blog-post_07",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/satellite-remote1.webp",
        "excerpt": "The word Sustainable is not just an uncommon word anymore but has become an important word of daily use...",
        "author": "AMARBEN PATNI",
        "date": "May 7, 2024"
      },
      {
        "title": "Is 2024 the Year of Sustainable Eco-Friendly Real Estate? Exploring Trends, Innovations, and Green Development",
        "link": "https://precisiongrowindia.blogspot.com/blog-post",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/06-May-Blog.webp",
        "excerpt": "The word Sustainable is not just an uncommon word anymore but has become an important word of daily use...",
        "author": "AMARBEN PATNI",
        "date": "May 6, 2024"
      },
      {
        "title": "Rising Tobacco Prices in Andhra as Brazil and Indonesia Crop Failures Hit Global Markets: What You Need to Know",
        "link": "https://precisiongrowindia.blogspot.com/tobacco-prices-rise-andhra-crop-failure-brazil-indonesia",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/03-May-Blog.webp",
        "excerpt": "Tobacco known as the ‘Golden Leaf’ is one of the most profitable commercial cash crops...",
        "author": "AMARBEN PATNI",
        "date": "May 2, 2024"
      },
      {
        "title": "Research and Development: Key to Safeguarding Food Security and Nutrition",
        "link": "https://precisiongrowindia.blogspot.com/research-and-development-key-to",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/Key2.webp",
        "excerpt": "India stands at a critical juncture in its food security narrative...",
        "author": "AMARBEN PATNI",
        "date": "May 1, 2024"
      },
      {
        "title": "The Vital Role of ESG in Addressing Climate Change: Understanding its Impact, Importance and Solutions",
        "link": "https://precisiongrowindia.blogspot.com/research-and-development-key-to",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/esg-1.webp",
        "excerpt": "Environmental, social, and governance (ESG) has become an important measurement to report on for businesses...",
        "author": "AMARBEN PATNI",
        "date": "April 29, 2024"
      },
      {
        "title": "Is a 40 Lakh Yearly Income Possible with Organic Farming? Let’s Find Out Its Potential",
        "link": "https://precisiongrowindia.blogspot.com/blog-post_27",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/organic-farm.webp",
        "excerpt": "In today’s world if a man starts a business, he expects a certain return to propagate his venture to new heights...",
        "author": "AMARBEN PATNI",
        "date": "April 27, 2024"
      },
      {
        "title": "Ending World Hunger: A Global Challenge for Food Security",
        "link": "https://precisiongrowindia.blogspot.com/blog-post",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/food.webp",
        "excerpt": "We have all felt that burning sensation in our stomach when we get hungry. This urgent demand...",
        "author": "AMARBEN PATNI",
        "date": "April 26, 2024"
      },
      {
        "title": "Revolutionizing Agriculture: Using Wastewater to Water Crops Sustainably",
        "link": "https://precisiongrowindia.blogspot.com/wastewater-irrigation",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/water-waste.webp",
        "excerpt": "In recent years, wastewater irrigation has gained significant attention as a potential solution to water scarcity in agriculture...",
        "author": "AMARBEN PATNI",
        "date": "April 23, 2024"
      },
      {
        "title": "World Earth Day 2024 | Find out how plastics are affecting the environment",
        "link": "https://precisiongrowindia.blogspot.com/plastics-impact-environment",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/EARTH-DAY.webp",
        "excerpt": "Earth is a beautiful life Sustaining planet in the solar system, it’s roughly 4.5 billion years old and is still...",
        "author": "AMARBEN PATNI",
        "date": "April 22, 2024"
      },
      {
        "title": "Plant Disease Control Tips: Canker, And Other Fungal Diseases (Final Part)",
        "link": "https://precisiongrowindia.blogspot.com/plant-disease-tips",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/blog-20.webp",
        "excerpt": "Plant blight is a common disease. Remember the potato famine in the 1840s? As a result of the blight, one million...",
        "author": "AMARBEN PATNI",
        "date": "April 20, 2024"
      },
      {
        "title": "Exploring Plant Diseases Identification: A Guide (Part 2)",
        "link": "https://precisiongrowindia.blogspot.com/common-plant-diseases2",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/plant-2.jpeg",
        "excerpt": "Powdery mildew is a common fungus that affects a wide variety of plants. It is easily identified and appears...",
        "author": "AMARBEN PATNI",
        "date": "April 19, 2024"
      },
      {
        "title": "Exploring Common Plant Diseases: A Guide (Part 1)",
        "link": "https://precisiongrowindia.blogspot.com/common-plant-diseases",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/BLOG.webp",
        "excerpt": "Like us humans, plants also get diseases and as we seek professional help to get better, plants also need proper...",
        "author": "AMARBEN PATNI",
        "date": "April 18, 2024"
      },
      {
        "title": "12 Ways 5G Will Transform Farming and Agriculture",
        "link": "https://precisiongrowindia.blogspot.com/how-5g-will-transform-farming-and",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/5G-farming.jpeg",
        "excerpt": "How can 5G technology be set to shake up the world of farming and agriculture?",
        "author": "AMARBEN PATNI",
        "date": "April 17, 2024"
      },
      {
        "title": "Understanding Green GDP And Its Implications For Sustainable Development",
        "link": "https://precisiongrowindia.blogspot.com/green-gdp-sustain",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/gdp.webp",
        "excerpt": "In today's global landscape, where environmental concerns are at the forefront of discussions, the concept of Green GDP...",
        "author": "AMARBEN PATNI",
        "date": "April 16, 2024"
      },
      {
        "title": "Revolutionizing Agriculture With Automated Satellite Monitoring Service",
        "link": "https://precisiongrowindia.blogspot.com/Agriculture-Revolutionizing",
        "image": "https://ecroptoday.azureedge.net/ecroptoday/01-Apr-Blog.webp",
        "excerpt": "In the face of global warming, agriculture is confronting unprecedented challenges. With rising temperatures impacting soil health...",
        "author": "AMARBEN PATNI",
        "date": "April 2, 2024"
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
            
         
         {/* sidebar here */}
            <Sidebar/>
         {/* Navigation here */}
         
        </div>
     
      </div>
    </>
  );
};

export default Blog;
