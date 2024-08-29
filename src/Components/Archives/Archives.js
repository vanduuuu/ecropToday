import React, { useEffect, useState } from 'react';
import './Archives.css';
import Titletag from '../Titletag/Titletag';
import Downborder from '../Editorial/Downborder';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import API_archive from './API_archive'; // Import static data

const Archives = () => {
  const [archives, setArchives] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(2); // Number of articles per page
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Sort the static data by month in descending order
    const sortedArchives = API_archive.sort((a, b) => {
      return new Date(`${b.month} 1`).getTime() - new Date(`${a.month} 1`).getTime();
    });

    setArchives(sortedArchives);
    setTotalPages(Math.ceil(sortedArchives.length / articlesPerPage));
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = archives.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    if (totalPages > maxVisiblePages) {
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) pageNumbers.push('...');
      }
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((number, index) => (
      <button
        key={index}
        onClick={() => number !== '...' && handlePageChange(number)}
        className={currentPage === number ? 'active' : ''}
        disabled={number === '...'}
      >
        {number}
      </button>
    ));
  };

  return (
    <div className='container'>
      <Breadcrumbs navhome="home" navnext="Archive" />
      
      {currentArticles.map((archive, index) => (
        <React.Fragment key={index}>
          <Titletag 
            icon="fa-regular fa-newspaper"
            title={`${archive.month} MAGAZINE`}
          />
          <Downborder/>
          <div className="archives-container">
            <table className="table table-bordered table-striped responsive-table">
              <thead>
                <tr>
                  <th className="text-center">S. No</th>
                  <th colSpan="2" className="text-center">
                    {archive.volume}
                    <div>Published By: Tech Visit IT Pvt Ltd</div>
                  </th>
                  <th className="text-center">Page No.</th>
                  <th className="text-center">PDF</th> 
                </tr>
              </thead>
              <tbody>
                {archive.articles.map((article, idx) => (
                  <React.Fragment key={idx}>
                    <tr>
                      <td className="text-center sr">{article.s_no}</td>
                      <td className="label-cell">Authors:</td>
                      <td>{article.authors}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="label-cell">Article title :</td>
                      <td>{article.title}</td>
                      <td className="text-center pg">{article.page_no}</td>
                      <td className="text-center">
                        <a href={article.pdf_url} target="_blank" rel="noopener noreferrer">
                          <i className="fa-solid fa-file-pdf text-danger fs-5"></i>
                        </a>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      ))}

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Archives;
