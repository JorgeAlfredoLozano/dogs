/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import { GET_DOGS, FILTER, FILTER_TEMP, SEARCH_DOGS, RESET_FILTERS, ORDER } from "./types";

/*************************************/
/*****     ESTADOS INICIALES     *****/
/*************************************/
const initialState = {
  dogs: [], //todos los perros
  filteredDogs: [], //perros filtrados
  // searchedDogs: [], 
  originFilter: 'all', //tipo de filtro all|api|bd
  // temperamentFilter: '', // Nuevo estado para el filtro de temperamento
  currentPage: 1 // (PAGINADO) para que arranque en pag 1
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    /*************************************/
    /*** getDogs() - Traigo los perros ***/
    /*************************************/
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        filteredDogs: action.payload
      };
    
    /************************************************************/
    /* filterDogs() - Filtro los perros x All" || "Api" || "Db" */
    /************************************************************/
    case FILTER:
      const origin = action.payload.origin;
      let filteredDogs = [];
  
      if (origin === 'all') {
        filteredDogs = state.dogs;
      } else if (origin === 'api') {
        filteredDogs = state.dogs.filter(dog => !dog.createdInDb);
      } else {
        filteredDogs = state.dogs.filter(dog => dog.createdInDb);
        filteredDogs.forEach(dog => {
          if (Array.isArray(dog.temperaments)) {
            dog.temperaments = dog.temperaments.map(temp => temp.name).join(', ');
          }
        });
      }
      return {
        ...state,
        originFilter: origin,
        filteredDogs: filteredDogs,
        currentPage: action.payload.currentPage
      };

    /****************************************************/
    /* filterTemp() - Filtro los perros x Temperamento  */
    /****************************************************/  
    case FILTER_TEMP:
        const temp = action.payload.temp;
        const dogs = state.dogs;
        let filteredTempDogs = [];

        if (temp === '') {
          filteredTempDogs = dogs;
        } else {
          filteredTempDogs = dogs.filter(dog => {
            if (Array.isArray(dog.temperaments)) {
              return dog.temperaments.some((temperamentObj) => temperamentObj.name.includes(temp));
            } else if (typeof dog.temperaments === 'string') {
              const tempArray = dog.temperaments.split(',').map((t) => t.trim());
              return tempArray.includes(temp);
            } else if (typeof dog.temperament === 'string') {
              const tempArray = dog.temperament.split(',').map((t) => t.trim());
              return tempArray.includes(temp);
            }
            
            return false; // Agregar este valor de retorno
          });
          
        }
         return {
          ...state,
          originFilter: temp,
          filteredDogs: filteredTempDogs,
          currentPage: action.payload.currentPage
        };
    
    /*****************************************************/
    /* orderDogs() - Ordeno los perros x "Asc" o "Desc"  */
    /*****************************************************/
    case ORDER:
      const orderType = action.payload;
      let sortedDogs = [...state.filteredDogs];
        
      if (orderType === "asc") {
        sortedDogs.sort((a, b) => a.name.localeCompare(b.name));
      } else if (orderType === "desc") {
        sortedDogs.sort((a, b) => b.name.localeCompare(a.name));
      }
  
      sortedDogs.forEach(dog => {
        if (Array.isArray(dog.temperaments)) {
          dog.temperaments = dog.temperaments.map(temp => temp.name).join(', ');
        }
      });
      
      return {
        ...state,
        filteredDogs: sortedDogs
      };
    
    /***********************************************/
    /*  searchDogs() - Busco los perros x Nombre   */
    /***********************************************/
    case SEARCH_DOGS:
        const name = action.payload.toLowerCase();
        const searchedDogs = state.dogs.filter(dog =>
          dog.name.toLowerCase().includes(name)
        );
        
        return {
          ...state,
          filteredDogs: searchedDogs
        };
      
    /*****************************************/
    /* resetFilters() - Reseteo los filtros  */
    /*****************************************/
    case RESET_FILTERS:
      return {
        ...state,
        originFilter: 'all',
        temperamentFilter: '', // Restablecer el estado del filtro de temperamento
        filteredDogs: state.dogs,
        currentPage: 1
      };

    default:
      return state;
  }
};

export default reducer;

