/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import React, { useState } from "react";
import styles from './SearchBar.module.css'; 

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState(""); //para controlar el input de busqueda

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    onSearch(name); //voy a buscar el Nombre
    setName("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") { //habilito el enter para el boton search
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        value={name}
        className={styles.input}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} style={{height:"25px"}} className={styles.buttonLink}>Search</button>
    </div>
  );
};

export default SearchBar;

