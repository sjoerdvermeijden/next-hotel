import React from 'react';

import { PaginationWrapper } from "./Style";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__item">
            <a
              onClick={() => paginate(number)}
              href="#"
              className="pagination__link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </PaginationWrapper>
  );
};

export default Pagination;
