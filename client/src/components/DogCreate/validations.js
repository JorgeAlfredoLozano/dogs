export const validate = (newDog) => {
  
  /*************************************/
  /****     INICIALIZO ERRORS      *****/
  /*************************************/
  let errors = {
    image: "",
    name: "",
    height: {
      imperial: "",
      metric: "",
    },
    weight: {
      imperial: "",
      metric: "",
    },
    life_span: "",
    temperament: "",
    ok: true,
  };

  /*************************************/
  /****     VALIDO EL NNOMBRE      *****/
  /*************************************/
  if (!newDog.name) { 
    errors.ok = false;
    errors.name = "The name is required";
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s¨']*$/u.test(newDog.name)) {
    errors.ok = false;
    errors.name = "The name only accepts letters and apostrophes";
  } else if (newDog.name.length > 30) {
    errors.ok = false;
    errors.name = "The maximum length is 30 characters";
  }

  /*************************************/
  /**** VALIDO EL ALTURA (imperial) ****/
  /*************************************/
  if (!newDog.height.imperial) {
    errors.ok = false;
    errors.height.imperial = "Height (imperial) is required";
  } else if (!/^\d{1,2}\s-\s\d{1,2}$/.test(newDog.height.imperial)) {
    errors.ok = false;
    errors.height.imperial = "Invalid format for height (imperial), example: 3 - 5";
  }

  /*************************************/
  /**** VALIDO EL ALTURA (métrica) ****/
  /*************************************/
  if (!newDog.height.metric) {
    errors.ok = false;
    errors.height.metric = "Height (metric) is required";
  } else if (!/^\d{1,2}\s-\s\d{1,2}$/.test(newDog.height.metric)) {
    errors.ok = false;
    errors.height.metric = "Invalid format for height (metric), example: 4 - 7";
  }

  /*************************************/
  /**** VALIDO EL PESO (imperial) ****/
  /*************************************/
  if (newDog.weight.imperial) {
    if (!/^\d{1,2}\s-\s\d{1,2}$/.test(newDog.weight.imperial)) {
      errors.ok = false;
      errors.weight.imperial = "Invalid format, example: 4 - 7";
    }
  } else {
    errors.ok = false;
    errors.weight.imperial = "Weight is required";
  }

  /*************************************/
  /**** VALIDO EL PESO (métrico) ****/
  /*************************************/
  if (newDog.weight.metric) {
    if (!/^\d{1,2}\s-\s\d{1,2}$/.test(newDog.weight.metric)) {
      errors.ok = false;
      errors.weight.metric = "Invalid format, example: 4 - 7";
    }
  } else {
    errors.ok = false;
    errors.weight.metric = "Weight is required";
  }

  /*************************************/
  /****    VALIDO VIDA ESTIMADA     ****/
  /*************************************/
  if (!newDog.life_span) {
    errors.ok = false;
    errors.life_span = "Life expectancy is required";
  } else if (!/^\d{1,2}\s-\s\d{1,2}\s(year|years)$/.test(newDog.life_span)) {
    errors.ok = false;
    errors.life_span = "Invalid format, example: 3 - 4 years";
  }

  /*************************************/
  /** VALIDO REPETICION TEMPERAMENTOS **/
  /*************************************/
  if (newDog.temperament) {
    const temperaments = newDog.temperament.split(",");
    const uniqueTemperaments = [...new Set(temperaments)]; // Remove duplicates using Set
    if (temperaments.length !== uniqueTemperaments.length) {
      errors.temperament = "The temperament already exists";
      errors.ok = false;
    }
  }

  return errors;
};