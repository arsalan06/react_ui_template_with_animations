// DottedPagination.js
import React, { useState } from 'react';
import './dottedPagination.css';

const DottedPagination = ({ totalDots, activeDot }) => {
  const [currentPage, setCurrentPage] = useState(activeDot);

  const handleClick = (index) => {
    setCurrentPage(index);
    // Add your logic to handle page change, e.g., fetching data for the new page.
  };

  return (
    <div className="pagination-container">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={`pagination-dot ${index === currentPage ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default DottedPagination;
