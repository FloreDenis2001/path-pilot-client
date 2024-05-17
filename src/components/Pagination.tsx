import React, { useState } from 'react';

const Pagination = () => {
  const [totalPages, setTotalPages] = useState(20);
  const [currentPage, setCurrentPage] = useState(10);

  const createPagination = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

  const renderPagination = () => {
    let liTags = [];
    let active;
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;

    if (currentPage > 1) {
      liTags.push(
        <li key="prev" className="btn prev" onClick={() => createPagination(currentPage - 1)}>
          <span><i className="fas fa-angle-left"></i> Prev</span>
        </li>
      );
    }

    if (currentPage > 2) {
      liTags.push(
        <li key={1} className="first numb" onClick={() => createPagination(1)}>
          <span>1</span>
        </li>
      );

      if (currentPage > 3) {
        liTags.push(
          <li key="dots1" className="dots">
            <span>...</span>
          </li>
        );
      }
    }

    if (currentPage === totalPages) {
      beforePage = beforePage - 2;
    } else if (currentPage === totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (currentPage === 1) {
      afterPage = afterPage + 2;
    } else if (currentPage === 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength === 0) {
        plength = plength + 1;
      }
      active = currentPage === plength ? "active" : "";
      liTags.push(
        <li key={plength} className={`numb ${active}`} onClick={() => createPagination(plength)}>
          <span>{plength}</span>
        </li>
      );
    }

    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        liTags.push(
          <li key="dots2" className="dots">
            <span>...</span>
          </li>
        );
      }
      liTags.push(
        <li key="last" className="last numb" onClick={() => createPagination(totalPages)}>
          <span>{totalPages}</span>
        </li>
      );
    }

    if (currentPage < totalPages) {
      liTags.push(
        <li key="next" className="btn next" onClick={() => createPagination(currentPage + 1)}>
          <span>Next <i className="fas fa-angle-right"></i></span>
        </li>
      );
    }

    return liTags;
  };

  return (
    <div className="pagination">
      <ul>{renderPagination()}</ul>
    </div>
  );
};

export default Pagination;
