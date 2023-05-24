/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import React from "react";
import styles from "./Paginado.module.css";

export default function Paginado({ dogsPerPage, allDogs, paginado, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const firstPageIndex = ((Math.ceil(currentPage / 5) - 1) * 5) + 1;
  const lastPageIndex = Math.min(firstPageIndex + 4, pageNumbers.length);

  return (
    <nav>
      <ul className={styles.paginado}>
        <li className={currentPage === 1 ? styles.disabled : ""}>
          <button onClick={() => paginado(currentPage - 1)} disabled={currentPage === 1}>
            {"<"}
          </button>
        </li>
        {pageNumbers.slice(firstPageIndex - 1, lastPageIndex).map((number) => (
          <li
            className={currentPage === number ? `${styles.number} ${styles.active}` : styles.number}
            key={number}
          >
            <button onClick={() => paginado(number)}>
              {number}
            </button>
          </li>
        ))}
        <li className={currentPage === pageNumbers.length ? styles.disabled : ""}>
          <button onClick={() => paginado(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
