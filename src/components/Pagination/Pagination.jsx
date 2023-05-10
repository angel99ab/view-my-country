import React, { useState } from 'react';

import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage - 1);

  function handlePageClick(index) {
    if (index < 0 || index > totalPages - 1) {
      return null;
    }

    window.scrollTo(0, 0);
    setCurrentPageIndex(index);
    onPageChange(index + 1);
  }

  function renderPage(index) {
    const isActive = currentPageIndex === index;
    return (
      <li
        key={index}
        className={styles.pagination__item}
        onClick={() => handlePageClick(index)}
      >
        <button
          type='button'
          className={`${styles.pagination__link} ${
            isActive ? styles.selected : ''
          }`}
        >
          {index + 1}
        </button>
      </li>
    );
  }

  function renderDots(key) {
    return (
      <li key={key} className={styles.pagination__item}>
        <div className={styles.pagination__dots}>...</div>
      </li>
    );
  }

  const pages = [];
  let left = Math.max(1, currentPageIndex - 1);
  let right = Math.min(totalPages - 2, currentPageIndex + 1);

  if (currentPageIndex < 2 || currentPageIndex >= totalPages - 1) {
    left = Math.max(1, currentPageIndex - 3);
    right = Math.min(totalPages - 2, currentPageIndex + 3);
  }

  pages.push(renderPage(0));

  if (left > 1) {
    pages.push(renderDots('left-dots'));
  }

  for (let i = left; i <= right; i++) {
    pages.push(renderPage(i));
  }

  if (right < totalPages - 2) {
    pages.push(renderDots('right-dots'));
  }

  pages.push(renderPage(totalPages - 1));

  return (
    <nav className={styles.pagination}>
      <ul className={styles.pagination__list}>
        <li className={styles.pagination__item}>
          <button
            className={`${styles.pagination__link} ${
              currentPageIndex === 0 ? styles.disabled : ''
            }`}
            onClick={() => handlePageClick(currentPageIndex - 1)}
          >
            &#10094;
          </button>
        </li>
        {pages}
        <li className={styles.pagination__item}>
          <button
            className={`${styles.pagination__link} ${
              currentPageIndex === totalPages - 1 ? styles.disabled : ''
            }`}
            onClick={() => handlePageClick(currentPageIndex + 1)}
          >
            &#10095;
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
