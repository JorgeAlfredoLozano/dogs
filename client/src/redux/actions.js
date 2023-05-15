import axios from 'axios';
import { GET_DOGS, FILTER, ORDER, RESET_FILTERS } from './types';
// import { generatePath } from 'react-router-dom/cjs/react-router-dom.min';

export function getDogs(){ // conexion con el BACK
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/dogs");
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        });
    }
}

export const filterDogs = (origin, currentPage) => {
    return {
      type: FILTER,
      payload: {
        origin,
        currentPage
      }
    };
  };
  
export const resetFilters = () => {
    return {
      type: RESET_FILTERS
    };
  };

export const orderDogs = (orderType) => {
  
    return {
        type: ORDER,
        payload: orderType
    }
}




