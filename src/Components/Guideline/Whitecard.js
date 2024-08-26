import React from 'react';
import './Whitecard.css';
const whitecardApi = [
    {
        id : 1,
        title : "Article Topic",
        description:
                "Article related to Latest innovations, Current scenario, Agribusiness, and Agri Startups Story.",
    },
    {
        id : 2,
        title : "Article Detail",
        description:
                "Name, designation and organization name of the author should be mentioned in the article in a comprehensible manner.",
    },
    {
        id : 3,
        title : "Article Format",
        description:
                "MS Word (Doc file only) Font- Times new Roman, Size- 12, Spacing-1.5, Page- 2-3",
    },
    {
        id : 4,
        title : "Publication Fee",
        description:
                "Authors can submit articles for free. However, no author's article will be published in two consecutive issues. We have the freedom to select articles for publication, and authors cannot compel us to publish theirs.",
    },
    {
        id : 5,
        title : "Photographs in Article",
        description:
                "Each article should contain one or two relevant photographs (if possible).",
    },
    {
        id : 6,
        title : "Article not allowed",
        description:
                "Any Academic article or Traditional topics (like Crop Cultivation, Disease-Insect Management or any bookish topics) will not be accepted until some new technological approach mentioned in your article.",
    },
    {
        id : 7,
        title : "Promotional article (Advertisement)",
        description:
                "If an article mentions any brand or company, we consider it as a promotional piece (advertisement) rather than an authored article",
    },
]
const Whitecard = () => {
  return (
    <div>
      <div className='whitecardd'>
        <div className='row'>
            {whitecardApi.map((cards) => (
                <div class="col-lg-4 col-md-6">
                <div class="card shadow">
                    <h3>{cards.title}</h3>
                    <p>{cards.description}</p>
                </div>
                </div>
            ))}
       
    
        </div>
      </div>
    </div>
  )
}

export default Whitecard
