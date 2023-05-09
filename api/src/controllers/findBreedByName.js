require('dotenv').config();
const { API_URL_BREED, API_KEY} = process.env;
const { Dog, Temperament } = require('../db');

const axios = require('axios');

const findBreedByName = async (name) => {
    const response = await axios.get(`${API_URL_BREED}${name}`);
    const responsedb = await Dog.findAll(
        {   
            where: {name},

            include: {
                model: Temperament,
                attributes: ["name"],
                through: {                   //para que no muestre los campos de la tabla intermedia
                    attributes: [],
                },
            },
        }
    );

    const allInfo = response.data.concat(responsedb);
    return allInfo;
    }


module.exports = findBreedByName