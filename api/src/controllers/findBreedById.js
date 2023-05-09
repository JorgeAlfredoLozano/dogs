const findAllDogs = require("./findAllDogs");

const findBreedById = async (idRaza) => {
    const allDogs = await findAllDogs();
    const breedFiltered = allDogs.filter(dog => dog.id == idRaza)
    return breedFiltered;
}

module.exports = findBreedById;