/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, filterDogs, filterTemp, orderDogs, searchDogs } from '../../redux/actions';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import styles from './Home.module.css';
import axios from 'axios';
import fondo_home from '../../assets/fondo_home.gif';
// import { useHistory } from 'react-router-dom';


export default function Home() {
  const dispatch = useDispatch();  // defino el Dispatch  para despachar acciones al store de Redux y actualizar el estado global
  const [currentPage, setCurrentPage] = useState(1); // (PAGINADO) estado currentPage para la página actual  
  // const [dogsPerPage, setDogsPerPage] = useState(8); // (PAGINADO) estado dogsPerPage para la cant. de perros x pagina 
  const indexLastDog = currentPage * 8; // (PAGINADO) indice último perro, para saber el rango de perros que se muestran x página.
  const indexOfFirstDog = indexLastDog - 8; // (PAGINADO) indice primer perro, para saber el rango de perros que se muestran x página.
  const [selectedOrigin, setSelectedOrigin] = useState("all"); // Estado para almacenar la opción elegida "all" "API" o "BD"
  const [temperaments, setTemperaments] = useState([]); // Estado para guardar los temperamentos para el select
  const filteredDogs = useSelector((state) => state.filteredDogs); // Accede a los perros filtrados desde el estado de Redux
  // const history = useHistory();



  /*************************************/
  /***** CARGO ESTADO TEMPERAMENTS *****/
  /*************************************/
 
  useEffect(() => {
    const getTemperaments = async () => {
      try {
        const response = await axios.get("http://localhost:3001/temperaments");
        const sortedTemperaments = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setTemperaments(sortedTemperaments);
      } catch (error) {
        console.log(error);
      }
    };
    getTemperaments();
  }, []);

  /*************************************/
  /*****   ESTABLEZCO NRO PAGINA   *****/
  /*************************************/

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /*************************************/
  /* TRAIGO LOS PERROS (actions/redux) */
  /*************************************/
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  /*************************************/
  /*****     BUSCO POR NOMBRE      *****/
  /*************************************/
  const handleSearch = (name) => {
    dispatch(searchDogs(name));
    setCurrentPage(1);
  }

  /*************************************/
  /***   RESET FILTROS (reset/NAV)    **/
  /*************************************/
  const handleClick = () => {
    window.location.reload() //refresh
  };

  /*************************************/
  /**** ORDENAMIENTO (actions/redux) ***/
  /*************************************/
  
  const handleOrder = (event) => {   
       
    const orderType = event.target.value;
    dispatch(orderDogs(orderType));
  };

  /*************************************/
  /**** FILTRO x API (actions/redux) ***/
  /*************************************/

  const handleFilterChange = (event) => {
    const origin = event.target.value;
    setSelectedOrigin(origin);
    setCurrentPage(1);
    dispatch(filterDogs(origin, 1));
  };

  /*********************************************/
  /** FILTRO x TEMPERAMENTOS (actions/redux)  **/
  /*********************************************/

  const handlerFilterTemp = (event) => {
    const temp = event.target.value;
    setCurrentPage(1);
    dispatch(filterTemp(temp,1))
  }  

  /*************************************/
  /*****    R EN D E R I Z A D O   *****/
  /*************************************/
 
  return (
    
    <div style={{
      backgroundImage: `url(${fondo_home})`,
      backgroundSize: '90%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: 'black',
    }}
    className={styles.container}>
      
      {/*************************************/}
      {/**  RENDERIZO EL NAV(propiedades)  **/}
      {/*************************************/}
      <Nav
        onSearch={handleSearch}
        handleClick={handleClick}
        handleOrder={handleOrder}
        handlerFilterTemp={handlerFilterTemp}
        handleFilterChange={handleFilterChange}
        selectedOrigin={selectedOrigin}
        temperaments={temperaments}
      />

      {/***************************************/}
      {/* RENDERIZO EL PAGINADO (propiedades) */}
      {/***************************************/}
      
      <div className={styles.paginadoContainer}>
        <Paginado
          dogsPerPage={8}
          allDogs={filteredDogs.length}
          paginado={paginado}
          currentPage={currentPage}
        />
      </div>
      
      {/***************************************/}
      {/*** RENDERIZO LA CARD DE CADA PERRO ***/}
      {/***************************************/}
      <div className={styles.cardContainer}>
        {filteredDogs &&
          filteredDogs
            .slice(indexOfFirstDog, indexLastDog)
            .map((dog) => {
              return (
                <Card
                  key={dog.id}
                  name={dog.name}
                  image={dog.image}
                  temperament={dog.temperament ? dog.temperament : (dog.temperaments && Array.isArray(dog.temperaments) ? dog.temperaments.map(temp => temp.name).join(', ') : dog.temperaments)}
                  id={dog.id}
                  weight={dog.weight}
                />
              );
            })}
      </div>
      <Footer 
      />
    </div>
    
  );
}