const { Dog, Temperament } = require('../db');
require('dotenv').config();
const { API_URL, API_KEY} = process.env;

const axios = require('axios');

const mapTemperamentBd = async () => {
    const apiUrl = await axios.get(`${API_URL}?api_key=${API_KEY}`)
    const temperamentsApi = await apiUrl.data.map(breed => {
       return {
           temperament: breed.temperament,
       }
    });

    const temperaments = temperamentsApi && temperamentsApi.map(dog => dog.temperament && dog.temperament.split(', '));
    if (temperaments) {
        const tempEach = temperaments.map(temp => {
            if (temp) {
              for (let i = 0; i < temp.length; i++) {
                if (temp[i]) {
                  return temp[i];
                }
              }
            }
            return null;
          });
          tempEach.forEach(async element => {
            if (element) {
                const trimmedElement = element.trim();
                const temperament = await Temperament.findOrCreate({
                    where: { name: trimmedElement }
                });
            }
        });

        const allTemperaments = await Temperament.findAll();
        return allTemperaments;
    } else {
        return [];
    }
};
module.exports = mapTemperamentBd;


 