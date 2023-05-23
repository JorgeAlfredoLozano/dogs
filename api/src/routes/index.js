const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const findAllDogs = require('../controllers/findAllDogs');
const getApiInfo = require('../controllers/getApiInfo');
const getDbInfo = require('../controllers/getDbInfo');
const findBreedById = require('../controllers/findBreedById')
// const { mapFinderOptions } = require('sequelize/types/utils');
const mapTemperamentBd = require('../controllers/mapTemperamentBd');
const findBreedByName = require('../controllers/findBreedByName') 
const createDog = require('../controllers/createDog');

const STATUS_OK = 200;
const STATUS_ERROR_SV = 500;
const STATUS_ERROR = 404

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs/name', async (req,res) => {
    const { name } = req.query
    console.log(name, "entroooooooooooo")
    try {
        const breedsTotal = await findBreedByName(name.toLowerCase())
        res.status(STATUS_OK).json(breedsTotal);
    } catch (error) {
        res.status(STATUS_ERROR_SV).json({ error: error.message });
    }
})

router.post('/dogs', async (req,res) => {
    try {
        const {
            name,
            image,
            height,
            weight,
            life_span,
            temperament
        } = req.body;

        if (!name || !image || !height || !weight || !life_span || !temperament) throw Error( {"message": 'Fields cannot be empty'})
        const arrTemp = temperament.split(', ')
       
        const newDog = await createDog({
            name,
            image,
            height,
            weight,
            life_span,
            arrTemp,
        });
       
        res.status(STATUS_OK).json(newDog)  
    } catch (error) {
        return res.status(STATUS_ERROR_SV).json({ error: error.message })
    }
});

router.get('/dogs', async (req,res) => {
    // const name = req.query.name;

    try {
        const dogs = await findAllDogs();
        res.status(STATUS_OK).json(dogs)
    } catch (error) {
        res.status(STATUS_ERROR_SV).json({ error: error.message })
    }
})

router.get('/dogs/:idRaza', async (req,res) => {
    const { idRaza } = req.params;
    try {
        if (!idRaza) throw new Error({ message: "This id not empty"})
        const breed = await findBreedById(idRaza)
        return res.status(STATUS_OK).json(breed)
    } catch (error) {
        res.status(STATUS_ERROR_SV).json({ error: error.message })
    }

})

router.get('/temperaments', async (req,res) => {
        try {
            const allTemperaments = await mapTemperamentBd();
            if (!allTemperaments) throw Error({ message: "Temperaments not found"})
            return res.status(STATUS_OK).json(allTemperaments)
        } catch (error) {
            return res.status(STATUS_ERROR_SV).json( res.status(STATUS_ERROR_SV).json({ error: error.message }))
        }    
    });



module.exports = router;
