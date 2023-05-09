require('dotenv').config();
const { API_URL, API_KEY} = process.env;

const axios = require('axios');

const getApiInfo = async () => {
    const apiUrl = await axios.get(`${API_URL}?api_key=${API_KEY}`)
    const apiInfo = await apiUrl.data.map(breed => {
       return {
           id: breed.id,
           image: breed.image,
           name: breed.name,
           height: breed.height,
           weight: breed.weight,
           life_span: breed.life_span,
           temperament: breed.temperament
       }
    });
    return apiInfo
};

module.exports = getApiInfo;
