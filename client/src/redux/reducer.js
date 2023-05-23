import {
  GET_DOGS,
  FILTER,
  FILTER_TEMP,
  SEARCH_DOGS,
  RESET_FILTERS,
  ORDER
} from "./types";

const initialState = {
  dogs: [],
  filteredDogs: [],
  originFilter: "all",
  temperamentFilter: "",
  currentPage: 1
};

const applyTemperamentFilter = (dogs, temperament) => {
  return dogs.filter((dog) => {
    if (Array.isArray(dog.temperaments)) {
      return dog.temperaments.some((temperamentObj) => temperamentObj.name.includes(temperament));
    } else if (typeof dog.temperaments === "string") {
      const tempArray = dog.temperaments.split(",").map((t) => t.trim());
      return tempArray.includes(temperament);
    } else if (typeof dog.temperament === "string") {
      const tempArray = dog.temperament.split(",").map((t) => t.trim());
      return tempArray.includes(temperament);
    }

    return false;
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        filteredDogs: action.payload
      };

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
      
      case FILTER_TEMP:
        const temp = action.payload.temp;
        let filteredTempDogs = state.dogs;
        
        if (state.originFilter === "api") {
          filteredTempDogs = state.dogs.filter((dog) => !dog.createdInDb);
        } else if (state.originFilter === "db") {
          filteredTempDogs = state.dogs.filter((dog) => dog.createdInDb);
        }
        
        if (temp !== "") {
          filteredTempDogs = applyTemperamentFilter(filteredTempDogs, temp);
        }
        
        return {
          ...state,
          temperamentFilter: temp,
          filteredDogs: filteredTempDogs,
          currentPage: action.payload.currentPage
      };
      
      // Función auxiliar para aplicar el filtro de temperamento

      

    case ORDER:
      const orderType = action.payload;
      let sortedDogs = [...state.filteredDogs];

      if (orderType === "asc") {
        sortedDogs.sort((a, b) => a.name.localeCompare(b.name));
      } else if (orderType === "desc") {
        sortedDogs.sort((a, b) => b.name.localeCompare(a.name));
      }

      return {
        ...state,
        filteredDogs: sortedDogs
      };

    case SEARCH_DOGS:
      const name = action.payload.toLowerCase();
      const searchedDogs = state.dogs.filter((dog) =>
        dog.name.toLowerCase().includes(name)
      );

      return {
        ...state,
        filteredDogs: searchedDogs
      };

    case RESET_FILTERS:
      return {
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
