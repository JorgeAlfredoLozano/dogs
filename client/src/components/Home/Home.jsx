import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, filterDogs, orderDogs } from '../../redux/actions';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import "../Home/Home.css";
import axios from 'axios';

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexLastDog - dogsPerPage;
  const [selectedOrigin, setSelectedOrigin] = useState("all");
  const [selectedTemperament, setSelectedTemperament] = useState("");
  const [sortedDogs, setSortedDogs] = useState(null); // Nuevo estado para perros ordenados

  const [temperaments, setTemperaments] = useState([]);

  ////// TRAIGO LOS TEMPERAMENTOS AL ESTADO temperaments\\\\\\
  useEffect(() => {
    const getTemperaments = async () => {
      try {
        const response = await axios.get("http://localhost:3001/temperaments");
        setTemperaments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTemperaments();
  }, []);

  const filteredDogs = sortedDogs || allDogs.filter((dog) => {
    if (selectedOrigin === "all") {
      return true;
    } else if (selectedOrigin === "api") {
      return !dog.createdInDb;
    } else {
      return dog.createdInDb;
    }
  });

  const currentDogs = filteredDogs
  .filter((dog) => {
    if (selectedOrigin === "all") {

      return true;
    } else if (selectedOrigin === "api") {

      return !dog.createdInDb;
    } else {

      return dog.createdInDb;
    }
  })
  .filter((dog) => {
    if (!selectedTemperament) {
      console.log(dog.name,dog.temperament,dog.temperaments,"nombre en temperamento")
      return true;
    } else {
      return dog.temperament?.includes(selectedTemperament);
    }
  })
  .slice(indexOfFirstDog, indexLastDog);

  
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);


  ///////////  R E F R E S H \\\\\\\\\

  const handleClick = () => {
    dispatch(getDogs());
    setCurrentPage(1);
    setSelectedOrigin("all");
    setSelectedTemperament("");
    setSortedDogs(null); // Restablece perros ordenados
  };

  
  ///////// O R D E N A M I E N T O /////////////
  const handleOrder = (event) => {       
    const orderType = event.target.value;
    let sortedDogs = [...filteredDogs]; // Se filtran los perros según el origen seleccionado
  
    if (orderType === "asc") {
        sortedDogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (orderType === "desc") {
        sortedDogs.sort((a, b) => b.name.localeCompare(a.name));
    }
  
    setSortedDogs(sortedDogs); // Actualiza perros ordenados
    dispatch(orderDogs(orderType));
  };

//////// F I L T R O x A P I / DB \\\\\\\\\\\\\

const handleFilterChange = (event) => {
  const origin = event.target.value;
  setSelectedOrigin(origin);
  setCurrentPage(1);
  setSelectedTemperament("");
  dispatch(filterDogs(origin, 1));
  setSortedDogs(null); // Restablece perros ordenados
};


///////// R E N D E R I Z A D O \\\\\\\\\\\\\\\

return (
    <div>
      <Link to="/dog">New Dog</Link>
      <button onClick={handleClick}>Refresh</button>
      <div>
        
        <select onChange={handleOrder} value="order">
          <option value="order">Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <select>
          <option value="">Temperaments</option>
          {temperaments &&
            temperaments.map((temperament) => (
              <option key={temperament.id} value={temperament.name}>
                {temperament.name}
              </option>
            ))}
        </select>

        <select value={selectedOrigin} onChange={handleFilterChange}>
          <option value="all">ALL</option>
          <option value="api">API</option>
          <option value="db">DB</option>
        </select>

        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={filteredDogs.length}
          paginado={paginado}
          currentPage={currentPage}
        />

        <div className="card-container">
          {currentDogs &&
            currentDogs.map((dog) => {
              return (
                <Card
                  key={dog.id}
                  id={dog.id}
                  name={dog.name}
                  image={dog.image}
                  temperament={dog.createdInDb ? dog.temperaments : dog.temperament}
                  weight={dog.weight}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
