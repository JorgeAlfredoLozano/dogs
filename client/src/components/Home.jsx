import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../actions/index';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs); //me trae del reducer todos los perros 
  const [currentPage, setCurrentPage] = useState(1); // Página actual = 1
  const [dogsPerPage, setDogsPerPage] = useState(8); // Perros por pagina = 8
  const indexLastDog = currentPage * dogsPerPage; // indice del ultimo perro
  const indexOfFirstDog = indexLastDog - dogsPerPage; // indice del primer perro
  const currentDogs = allDogs.slice(indexOfFirstDog,indexLastDog); // calculo pagaina actual 0..7/8..15/16..23


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getDogs());
  }

  return (
    <div>
      <Link to="/dog">New Dog</Link>
      <h1>HOME DOGS</h1>
      <button onClick={(event) => handleClick(event)}>Refresh</button>
      <div>
        <select>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select>
          <option value="temp">Temperament</option>
        </select>
        <select>
          <option value="all">All</option>
          <option value="api">Api</option>
          <option value="bd">Bd</option>
        </select>
        <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
            currentPage={currentPage}
        />

        <div className="card-container">
            {allDogs &&
                currentDogs.map((dog) => (
                <Card
                    key={dog.id}
                    name={dog.name}
                    image={dog.image}
                    temperament={dog.temperament}
                    weight={dog.weight}
                />
                ))
            }
        </div>
      </div>
    </div>
  );
}
