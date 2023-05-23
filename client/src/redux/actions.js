/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import axios from 'axios';
import { GET_DOGS, FILTER, FILTER_TEMP, ORDER, RESET_FILTERS,SEARCH_DOGS } from './types';

/*************************************/
/*** getDogs() - Traigo los perros ***/
/*************************************/
export function getDogs(){ // conexion con el BACK
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        });
    }
}

/************************************************************/
/* filterDogs() - Filtro los perros x All" || "Api" || "Db" */
/************************************************************/
export const filterDogs = (origin, currentPage) => {
    return {
      type: FILTER,
      payload: {
        origin,
        currentPage
      }
    };
  };
  
/****************************************************/
/* filterTemp() - Filtro los perros x Temperamento  */
/****************************************************/
export const filterTemp = (temp, currentPage) => {
  return {
    type: FILTER_TEMP,
    payload: {
      temp,
      currentPage
    }
  };
};

/*****************************************/
/* resetFilters() - Reseteo los filtros  */
/*****************************************/
export const resetFilters = () => {
    return {
      type: RESET_FILTERS
    };
  };

/*****************************************************/
/* orderDogs() - Ordeno los perros x "Asc" o "Desc"  */
/*****************************************************/
export const orderDogs = (orderType) => {
  
    return {
        type: ORDER,
        payload: orderType
    }
}

/***********************************************/
/*  searchDogs() - Busco los perros x Nombre   */
/***********************************************/
export const searchDogs = (name) => {
  return {
    type: SEARCH_DOGS,
    payload: name
  };
};



