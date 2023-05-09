import axios from 'axios';

export function getDogs(){ // conexion con el BACK
    return async function(dispatch) {
        var json = await axios.get("http://localhost:3001/dogs",{

        });
        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        });
    }
}