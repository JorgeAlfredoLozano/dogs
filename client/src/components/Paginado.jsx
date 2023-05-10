import "./Paginado.css";

export default function Paginado({ dogsPerPage, allDogs, paginado, currentPage }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='paginado'>
          {pageNumbers.map((number) => (
            <li
              className={currentPage === number ? 'number active' : 'number'}
              key={number}
            >
              <a onClick={() => paginado(number)}>{number}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  

