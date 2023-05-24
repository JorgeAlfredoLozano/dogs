/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/

import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css'; // Importa el archivo CSS Module
import perro_nav from '../../assets/perro93.gif';

/*************************************/
/*****  FUNCION COMPONENTE NAV   *****/
/*************************************/
const Nav = ({
  onSearch,
  handleClick,
  handleOrder,
  handlerFilterTemp,
  handleFilterChange,
  selectedOrigin,
  temperaments,
}) => {
  return (
    
    <div className={styles.navContainer}> 
      
      <img
        className={styles['moving-image']}
        src={perro_nav}
        alt="Gif Animado"
        loop
      />

      {/*************************************/}
      {/**    RENDERIZO EL BOTON NewDog    **/}
      {/*************************************/}
      
      <NavLink to="/dog" className={styles.buttonLink} activeClassName={styles.active}>
        New Dog
      </NavLink>
      
      {/*************************************/}
      {/**     RENDERIZO LA SearchBar      **/}
      {/*************************************/}
      <SearchBar onSearch={onSearch} />
      
      <div style={{ 
        border: "0px solid white",
        marginRight: "150px",
        height: "30px",
        width: "400px",
        borderRadius: "6px",
        lineHeight: "28px",
        }}>
          
        {/* BOTON RESET */}
        <button onClick={handleClick} style={{marginRight: "5px", height:"25px"}} className={styles.buttonLink} >Reset</button>
        
        {/* SELECT  DE ORDENAMIENTO */}
        <select style={{ marginRight: "5px", height: "25px", borderRadius: "6px", textAlign: "center" }} onChange={handleOrder} value="order">
          <option value="order">Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        {/* SELECT DE FILTROS X TEMPERAMENTOS */}
        <select style={{ marginRight: "5px", height: "25px", borderRadius: "6px", textAlign: "center" }} onChange={handlerFilterTemp}>
          <option value="">Temperaments</option>
          {temperaments &&
            temperaments.map((temperament) => (
              <option key={temperament.id} value={temperament.name}>
                {temperament.name}
              </option>
            ))}
        </select>

        {/* SELECT DE FILTROS API|DB|ALL  */}
        <select style={{ marginRight: "5px", height: "25px", borderRadius: "6px", textAlign: "center" }} value={selectedOrigin} onChange={handleFilterChange}>
          <option value="all">ALL</option>
          <option value="api">API</option>
          <option value="db">DB</option>
        </select>
      </div>
      
    </div>
  );
};

export default Nav;

