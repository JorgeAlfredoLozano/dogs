const { Dog, Temperament } = require('../db');

const getDbInfo = async () => { //me trai
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {                   //para que no muestre los campos de la tabla intermedia
                attributes: [],
            },
        },
    }
    )
}

module.exports =  getDbInfo;