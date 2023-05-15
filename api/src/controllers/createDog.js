const { Dog, Temperament } = require('../db');

const createDog = async ({ name, image, height, weight, life_span, arrTemp }) => {
  
  const newDog = await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
  });

  for (const tempName of arrTemp) {
    const [temp, created] = await Temperament.findOrCreate({
      where: { name: tempName },
    });
    await newDog.addTemperament(temp);
  }

  return newDog;
};

module.exports = createDog;


