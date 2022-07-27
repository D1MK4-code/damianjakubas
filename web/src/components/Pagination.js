import { Link } from 'gatsby';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { PaginationStyles } from '../styles/PaginationStyles';
import Paragraph from './typo/Paragraph';

function Pagination({ baseURL, numberOfPages, currentPage }) {
  const prevPage = currentPage - 1 <= 1 ? '' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <div className="container">
      <PaginationStyles>
        <div className="icons">
          <Link
            to={`${baseURL}/${prevPage}`}
            className={clsx(currentPage <= 1 && 'disabled')}
          >
            <ChevronLeftIcon />
            Prev
          </Link>
          <Link
            to={`${baseURL}/${nextPage}`}
            className={clsx(currentPage >= numberOfPages && 'disabled')}
          >
            Next
            <ChevronRightIcon />
          </Link>
        </div>
        <Paragraph>
          page {currentPage} of {numberOfPages} pages
        </Paragraph>
      </PaginationStyles>
    </div>
  );
}

export default Pagination;
