import { GET_DOGS, FILTER, ORDER } from "./types";

const initialState = {
  dogs: [],
  filteredDogs: [],
  originFilter: 'all',
  temperamentFilter: '', // Nuevo estado para el filtro de temperamento
  currentPage: 1
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
    
    
    ////////// O R D E R /////////////////
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
    
    case 'RESET_FILTERS':
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

