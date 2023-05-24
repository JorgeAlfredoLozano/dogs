import { GET_DOGS, FILTER, FILTER_TEMP, SEARCH_DOGS, RESET_FILTERS, ORDER} from "./types";

const initialState = { 
  dogs: [],
  filteredDogs: [],
  originFilter: "all",
  temperamentFilter: "",
  currentPage: 1
};

/*****************************************/
/* Funcion para Filtrar por Temperamento */
/*****************************************/
const applyTemperamentFilter = (dogs, temperament) => {
  return dogs.filter((dog) => {
    if (Array.isArray(dog.temperaments)) { //si viene de BD y es array 
      return dog.temperaments.some((temperamentObj) => temperamentObj.name.includes(temperament));
    } else if (typeof dog.temperaments === "string") { //si la propiedad es temperaments y un string 
       const tempArray = dog.temperaments.split(",").map((t) => t.trim());
       return tempArray.includes(temperament);
     } else if (typeof dog.temperament === "string") { //si la propiedad es temperament viene de la API 
        const tempArray = dog.temperament.split(",").map((t) => t.trim());
        return tempArray.includes(temperament);
     }

    return false;
  });
};

/*******************************/
/*****       REDUCER       *****/
/*******************************/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    /*************************************/
    /*****  TRAIGO TODOS LOS PERROS  *****/
    /*************************************/
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        filteredDogs: action.payload
      };

    /*************************************/
    /*****   FILTRO POR API|DB|ALL   *****/
    /*************************************/
    case FILTER:
      const origin = action.payload.origin;
      let filteredDogs = state.dogs;
      
      if (origin === "api") {
        filteredDogs = state.dogs.filter((dog) => !dog.createdInDb);
      } else if (origin === "db") {
        filteredDogs = state.dogs.filter((dog) => dog.createdInDb);
      }
      
      if (state.temperamentFilter !== "") {
        filteredDogs = applyTemperamentFilter(filteredDogs, state.temperamentFilter);
      }
      
      return {
        ...state,
        originFilter: origin,
        filteredDogs: filteredDogs,
        currentPage: action.payload.currentPage
    };
    
    /*************************************/
    /****  FILTRO POR TEMPERAMENTOS  *****/
    /*************************************/
    case FILTER_TEMP:
      const temp = action.payload.temp;
      let filteredTempDogs = state.dogs;
      
      if (state.originFilter === "api") { //traigo los temperamentos de la API
        filteredTempDogs = state.dogs.filter((dog) => !dog.createdInDb);
      } else if (state.originFilter === "db") { //traigo los temperamentos de la BD
        filteredTempDogs = state.dogs.filter((dog) => dog.createdInDb);
      }
      
      if (temp !== "") { //Sino esta vacio llamo a la funcion de arriba applyTemperamentFilter
        filteredTempDogs = applyTemperamentFilter(filteredTempDogs, temp);
      }
      
      return {
        ...state,
        temperamentFilter: temp,
        filteredDogs: filteredTempDogs,
        currentPage: action.payload.currentPage //para mantener el seguimiento de la página actual
    };
      
    /*************************************/
    /****  ORDENAMIENTO ASC Y DESC   *****/
    /*************************************/
    case ORDER:
      const orderType = action.payload;
      let sortedDogs = [...state.filteredDogs];

      if (orderType === "asc") {
        sortedDogs.sort((a, b) => a.name.localeCompare(b.name)); // orden ascendente
      } else if (orderType === "desc") {
        sortedDogs.sort((a, b) => b.name.localeCompare(a.name)); // orden descendente
      }

      return {
        ...state,
        filteredDogs: sortedDogs
      };

    /*************************************/
    /**** BUSQUEDA DE PERROS X NOMBRE ****/
    /*************************************/  
    case SEARCH_DOGS:
      const name = action.payload.toLowerCase();
      const searchedDogs = state.dogs.filter((dog) =>
        dog.name.toLowerCase().includes(name)
      ); // me fijo si el nombre esta incluido en el estado Dogs donde estan todos los perros

      return {
        ...state,
        filteredDogs: searchedDogs
      };

    /*************************************/
    /****   INICIALIZO LOS FILTROS    ****/
    /*************************************/   
    case RESET_FILTERS:
      return { //inicializo los estados para borrar los filtros
        ...state,
        originFilter: "all",
        temperamentFilter: "",
        filteredDogs: state.dogs,
        currentPage: 1
      };

    default:
      return state;
  }
};

export default reducer;
