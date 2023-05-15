import { useEffect } from "react";
import "./Paginado.css";

export default function Paginado({ dogsPerPage, allDogs, paginado, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const firstPageIndex = ((Math.ceil(currentPage / 5) - 1) * 5) + 1;
  const lastPageIndex = Math.min(firstPageIndex + 4, pageNumbers.length);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 37 && currentPage > 1) {
        // Flecha izquierda
        paginado(currentPage - 1);
      } else if (event.keyCode === 39 && currentPage < pageNumbers.length) {
        // Flecha derecha
        paginado(currentPage + 1);
      } else if (event.keyCode === 38 && currentPage > 5 && event.target.tagName !== "INPUT") {
        // Flecha arriba
        event.preventDefault();
        paginado(currentPage - 5);
      } else if (event.keyCode === 40 && currentPage < pageNumbers.length - 5 && event.target.tagName !== "INPUT") {
        // Flecha abajo
        event.preventDefault();
        paginado(currentPage + 5);
      }
    }
    
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage, paginado, pageNumbers.length]);

  return (
    <nav>
      <ul className="paginado">
        <li className={currentPage === 1 ? "disabled" : ""}>
          <button onClick={() => paginado(currentPage - 1)} disabled={currentPage === 1}>
            {"<"}
          </button>
        </li>
        {pageNumbers.slice(firstPageIndex - 1, lastPageIndex).map((number) => (
          <li
            className={currentPage === number ? "number active" : "number"}
            key={number}
          >
            <button onClick={() => paginado(number)}>
              {number}
            </button>
          </li>
        ))}
        <li className={currentPage === pageNumbers.length ? "disabled" : ""}>
          <button onClick={() => paginado(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
