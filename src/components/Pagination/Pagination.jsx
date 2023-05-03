import React from 'react'
import { Link } from "react-router-dom";

import styles from './Pagination.module.css';

const Pagination = (props) => {
  const pageNumbers = [...Array(props.totalPages + 1).keys()].slice(1)

  const nextPage = () => {
    window.scrollTo(0, 0);

    if (props.currentPage !== props.totalPages) {
      props.setCurrentPage(props.currentPage + 1)
    }
  }

  const prevPage = () => {
    window.scrollTo(0, 0);

    if (props.currentPage !== 1) {
      props.setCurrentPage(props.currentPage - 1)
    }
  }

  return (
    <nav className={styles.pagination}>
      <ul className={styles.pagination__list}>
        <li className={styles.pagination__item}>
          <Link
            className={styles.pagination__link}
            onClick={prevPage}
            to={"#"}>
            &larr;
          </Link>
        </li>
        {pageNumbers.map(pageNumber => (
          <li
            key={pageNumber}
            className={`
              ${styles.pagination__item}}
              ${props.currentPage == pageNumber ? styles.active : ''}`}
          >
            <Link
              className={styles.pagination__link}
              onClick={() => {
                window.scrollTo(0, 0);
                props.setCurrentPage(pageNumber)
              }}
              to={"#"}>
              {pageNumber}
            </Link>
          </li>
        ))}
        <li className={styles.pagination__item}>
          <Link
            className={styles.pagination__link}
            onClick={nextPage}
            to={"#"}>
            &rarr;
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination