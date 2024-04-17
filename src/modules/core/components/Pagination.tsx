import React, { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination:React.FC<PaginationProps> = ({totalPages,currentPage,onPageChange }) => {
  const createPagination = (pageNumber:number) => {
    onPageChange(pageNumber);
  };

  const renderPagination = () => {
    let liTags = [];
    
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      const isActive = currentPage === pageNumber ? "active" : "";
      
      liTags.push(
        <li key={pageNumber} className={`numb ${isActive}`} onClick={() => createPagination(pageNumber)}>
          <span>{pageNumber}</span>
        </li>
      );
    }

    return liTags;
  };

  return (
    <div className="pagination">
      <ul>
        {renderPagination()}
      </ul>
    </div>
  );
};

export default Pagination;
