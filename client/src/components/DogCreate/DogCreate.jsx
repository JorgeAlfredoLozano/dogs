/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import React, { useEffect, useState } from "react";
import styles from "./DogCreate.module.css";
import { validate } from './validations';
import axios from 'axios';
import image from '../../assets/no_image.png'
import fondo_new from '../../assets/fondo_new.gif'
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";



const FormNewDog = () => {
    const history = useHistory();
    const dogs = useSelector(state => state.dogs)
 
    /*************************************/
    /**** ESTADO LOCAL TEMPERAMENTOS *****/
    /*************************************/
    const [temperaments, setTemperaments] = useState([]);
    const [newTemperament, setNewTemperament] = useState("");

    /*************************************/
    /***** ESTADO LOCAL PERRO NUEVO  *****/
    /*************************************/
    const [newDog, setNewDog] = useState({
        // Para almacenar los datos del nuevo perro
        image: "",
        name: "",
        height: { imperial: "", metric: "" },
        weight: { imperial: "", metric: "" },
        life_span: "",
        temperaments: ""
    });

    /*************************************/
    /****   ESTADO LOCAL P/ERRORES   *****/
    /*************************************/
    const [errors, setErrors] = useState({
        // Para almacenar los mensajes de errores y el boolean "ok"
        image: "Image is required",
        name: "Name is required",
        height: { imperial: "Height is required", metric: "Height is required" },
        weight: { imperial: "Weight is required", metric: "Weight is required" },
        life_span: "Life expectancy is required",
        temperament: "",
        message: "",
        ok: false
    });

    /*************************************/
    /****      ESTADO LOCAL PARA      ****/
    /**** TEMPERAMENTOS SELECCIONADOS ****/
    /*************************************/
    const [selectedTemperaments, setSelectedTemperaments] = useState([]);

    /*************************************/
    /*****    COMPLETO EL SELECT     *****/
    /*****       TEMPERAMENTOS       *****/
    /*************************************/
    useEffect(() => {
        const fetchTemperaments = async () => {
            try {
                const response = await axios.get("http://localhost:3001/temperaments");
                const sortedTemperaments = response.data.sort((a, b) => a.name.localeCompare(b.name));
                setTemperaments(sortedTemperaments);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTemperaments();
    }, []);

    /*************************************/
    /**** CONTROL DE CAMBIOS: NOMBRE *****/
    /**** ALTURA, PESO, EST. DE VIDA *****/
    /*************************************/
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setNewDog((prevState) => ({
            ...prevState,
            [name]: value
        }));

        const updatedErrors = validate({
            ...newDog,
            [name]: value
        });
        setErrors(updatedErrors);
    };


    /*************************************/
    /*****     CONTROL CAMBIOS DE    *****/
    /***** TEMPERAMENTOS Y VALIDACION ****/
    /*************************************/
    const handleTemperamentChange = (event) => {
        const selectedTemperament = event.target.value;
        const isDuplicate = newDog.temperaments.includes(selectedTemperament);

        if (!isDuplicate) {
            const updatedTemperament = newDog.temperaments
                ? `${newDog.temperaments},${selectedTemperament}`
                : selectedTemperament;

            setNewDog((prevState) => ({
                ...prevState,
                temperaments: updatedTemperament,
            }));

            setSelectedTemperaments((prevState) => [
                ...prevState,
                selectedTemperament
            ]);
        }
    };

    /*************************************/
    /** CONTROLA INPUT NEW TEMPERAMENTO **/
    /*************************************/
    const handleInputChange = (event) => {
        setNewTemperament(event.target.value);
      };
    
    /*************************************/
    /*******   MANEJO DEL BOTON +   ******/
    /*************************************/  
    const handleAddTemperament = () => {
        
    if (newTemperament.trim() !== "" && !selectedTemperaments.includes(newTemperament)) {
        setSelectedTemperaments([...selectedTemperaments, newTemperament]);
    
        setNewDog((prevState) => ({
        ...prevState,
        temperaments: prevState.temperaments
            ? `${prevState.temperaments}, ${newTemperament}`
            : newTemperament,
        }));
    
        setNewTemperament(""); //borro el contenido del input
        
    }
    
    };

    /*************************************/
    /******* ENVIAR LA INFO A LA BD ******/
    /*************************************/
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(newDog); //tenia error sin s ojo????
        if (dogs.some((dog) => dog.name.toLowerCase().trim() === newDog.name.toLowerCase().trim())) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      message: "Error: Dog exists!",
    }));
    return; // Evitar la ejecución del resto del código
  }

  if (errors.ok) {
        //Aseguro el formato JSON para que se guarde en la BD
        const formattedDog = {
        name: newDog.name,
        image: newDog.image || null,
        height: {
            imperial: newDog.height.imperial,
            metric: newDog.height.metric
        },
        weight: {
            imperial: newDog.weight.imperial,
            metric: newDog.weight.metric
        },
        life_span: newDog.life_span,
        temperament: newDog.temperaments
        };

        axios.post('http://localhost:3001/dogs', formattedDog)
        .then((response) => {

            setErrors(prevErrors => ({
                ...prevErrors,
                ok: false,
                message: "The race was saved correctly"
                }));
            setTimeout(() => {
                history.push("/home");
                }, 1500);
            
            
        })
        .catch((error) => {
            
            setErrors(prevErrors => ({
            ...prevErrors,
            message: "Error: NOT saved correctly"
            }));

        });
    }
};

      const handleCancel = (event) => {
        return history.push("/home");
    }

    const ImageUrlChange = (e) => {
        setNewDog({ ...newDog, image: e.target.value });
    };

    return (
        
        <div
      className={styles.container}
      style={{
        backgroundImage: `url(${fondo_new})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
            <form onSubmit={handleSubmit}>

                {/*************************************/}
                {/*****          IMAGEN           *****/}
                {/*************************************/}
                <div className={styles.campoImagen}>

                    {newDog.image && <img src={newDog.image} alt="Pic Dog" />}
                    {!newDog.image && <img src={image} alt="" />}
                    <br />
                </div>

                <div className={styles.formField}>
                    <label style={{marginLeft:"-70px"}} htmlFor="imageUrl">Image:</label>
                    <input
                        name="imageUrl"
                        style={{marginLeft:"10px"}}
                        type="text"
                        placeholder="https://i.imgur.com/o18pt8H.jpeg"
                        value={newDog.image}
                        onChange={ImageUrlChange}
                    />
                    <span role="img" aria-label="Foto" className={styles.imgIcon}>&#128247;</span>

                </div>

                {/*************************************/}
                {/*****    NOMBRE Y SUS ERRORES   *****/}
                {/*************************************/}

                <div className={styles.formField}>
                    <label style={{marginLeft:"-70px"}} htmlFor="name">Name:</label>
                    <input
                        name="name"
                        type="text"
                        style={{marginLeft:"10px"}}
                        placeholder="ej: Border Collie"
                        value={newDog.name}
                        onChange={handleOnChange}
                        className={errors.name ? styles.invalid : styles.valid}
                    />
                    {errors.name ? (
                        <span className={styles.errorIcon} title={errors.name}>
                            {'\u274C'}
                        </span>
                    ) : (
                        <span className={styles.validIcon}>✅</span>
                    )}
                </div>


                {/*************************************/}
                {/***** ALTURA (IN) Y SUS ERRORES *****/}
                {/*************************************/}

                <div className={styles.formField}>
                    <div style={{ display: "inline-flex", alignItems: "center", marginLeft:"-10px" }}>
                        <label htmlFor="height-imperial" style={{ marginRight: "5px" }}>
                            Height: (in)
                        </label>
                        <input
                            name="height"
                            type="text"
                            placeholder="ej: 6 - 13"
                            style={{ width: "50px", marginRight: "5px" }}
                            value={newDog.height.imperial}
                            onChange={(e) =>
                                handleOnChange({
                                    target: {
                                        name: "height",
                                        value: {
                                            ...newDog.height,
                                            imperial: e.target.value,
                                        },
                                    },
                                })
                            }
                            className={errors.height.imperial ? styles.invalid : styles.valid}
                        />

                        {errors.height.imperial ? (
                            <span className={styles.errorIcon} title={errors.height.imperial}>
                                {'\u274C'}
                            </span>
                        ) : (
                            <span className={styles.validIcon}>✅</span>
                        )}
                    </div>

                    <div style={{ display: "inline-flex", alignItems: "center", marginLeft: "-61px" }}>
                        <label htmlFor="height-metric" style={{ marginRight: "5px" }}>
                            (m)
                        </label>
                        <input
                            name="height-metric"
                            type="text"
                            placeholder="ej: 3 - 6"
                            style={{ width: "50px", marginRight: "5px" }}
                            value={newDog.height.metric}
                            onChange={(e) =>
                                handleOnChange({
                                    target: {
                                        name: "height",
                                        value: {
                                            ...newDog.height,
                                            metric: e.target.value,
                                        },
                                    },
                                })
                            }
                            className={errors.height.metric ? styles.invalid : styles.valid}
                        />

                        {errors.height.metric ? (
                            <span className={styles.errorIcon} title={errors.height.metric}>
                                {'\u274C'}
                            </span>
                        ) : (
                            <span className={styles.validIcon}>✅</span>
                        )}
                    </div>
                </div>



                {/*************************************/}
                {/*****  PESO (in) Y SUS ERRORES  *****/}
                {/*************************************/}

                <div className={styles.formField}>
                    <div style={{ display: "inline-flex", alignItems: "center" , marginLeft:"-6px" }}>
                        <label htmlFor="weight-imperial" style={{ marginRight: "5px" }}>
                            Weight: (in)
                        </label>
                        <input
                            name="weight-imperial"
                            type="text"
                            placeholder="ej: 9 - 11.5"
                            style={{ width: "50px", marginRight: "5px" }}
                            value={newDog.weight.imperial}
                            onChange={(e) =>
                                handleOnChange({
                                    target: {
                                        name: "weight",
                                        value: {
                                            ...newDog.weight,
                                            imperial: e.target.value,
                                        },
                                    },
                                })
                            }
                            className={errors.weight.imperial ? styles.invalid : styles.valid}
                        />
                        {errors.weight.imperial ? (
                            <span className={styles.errorIcon} title={errors.weight.imperial}>
                                {'\u274C'}
                            </span>
                        ) : (
                            <span className={styles.validIcon}>✅</span>
                        )}
                    </div>

                    <div style={{ display: "inline-flex", alignItems: "center", marginLeft: "-60px" }}>
                        <label htmlFor="weight-metric" style={{ marginRight: "5px" }}>
                            (m)
                        </label>
                        <input
                            name="weight-metric"
                            type="text"
                            placeholder="ej: 23 - 29"
                            style={{ width: "50px", marginRight: "5px" }}
                            value={newDog.weight.metric}
                            onChange={(e) =>
                                handleOnChange({
                                    target: {
                                        name: "weight",
                                        value: {
                                            ...newDog.weight,
                                            metric: e.target.value,
                                        },
                                    },
                                })
                            }
                            className={errors.weight.metric ? styles.invalid : styles.valid}
                        />
                        {errors.weight.metric ? (
                            <span className={styles.errorIcon} title={errors.weight.metric}>
                                {'\u274C'}
                            </span>
                        ) : (
                            <span className={styles.validIcon}>✅</span>
                        )}
                    </div>
                </div>


                {/*************************************/}
                {/*****  VIDA ESTIMADA Y ERRORES  *****/}
                {/*************************************/}

                <div className={styles.formField}>
                    <label style={{marginLeft:"-140px"}} htmlFor="life_span">Life Span:</label>
                    <input
                        name="life_span"
                        type="text"
                        placeholder="10 - 12 years"
                        style={{marginLeft:"10px", width:"80px"}}
                        value={newDog.life_span}
                        onChange={handleOnChange}
                        className={errors.life_span ? styles.invalid : styles.valid}
                    />
                    {errors.life_span ? (
                        <span className={styles.errorIcon} title={errors.life_span}>
                            {'\u274C'}
                        </span>
                    ) : (
                        <span className={styles.validIcon}>✅</span>
                    )}
                </div>

                {/*************************************/}
                {/**** TEMPERAMENTOS Y SUS ERRORES ****/}
                {/*************************************/}
                <div className={styles.formField}>
                    <div style={{ display: "inline-flex", alignItems: "center" }}>
                        <label htmlFor="temperament" style={{ marginRight: "-11px" }}></label>
                        <select
                            name="temperament"
                            value={newDog.temperaments}
                            style={{
                                marginLeft: "-60px",
                                width: "140px",
                                height: "23px",
                                marginRight: "5px",
                                border: "1px solid #f6f6f6",
                                borderRadius: "3px",
                                backgroundColor: "#f6f6f6"
                            }}
                            onChange={handleTemperamentChange}
                            className={errors.temperament ? styles.invalid : styles.valid}
                        >
                            <option value="">Temperaments:</option>
                            {temperaments.map((temperament) => (
                                <option key={temperament.id} value={temperament.name}>
                                    {temperament.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: "inline-flex", alignItems: "center", marginLeft: "-99px" }}>
                        <label style={{ marginRight: "5px" }}></label>
                        <input placeholder="add new temperament" type="text" style={{ width: "140px", marginRight: "5px" }} value={newTemperament} onChange={handleInputChange} />
                        <button type="button" onClick={handleAddTemperament}>+</button>
                    </div>
                    <div>
                        <textarea
                            value={selectedTemperaments.join(", ")}
                            style={{
                                marginTop: "-2px",
                                marginLeft: "20px",
                                fontStyle: "italic",
                                fontWeight: "bold",
                                fontFamily: "Arial, sans-serif",
                                fontSize: "14px",
                                width: "325px",
                                height: "auto",
                                border: "1px solid #f6f6f6",
                                borderRadius: "3px",
                                backgroundColor: "#f6f6f6",
                                overflow: "auto",
                                resize: "none"
                            }}
                            readOnly
                        />
                    </div>
                    <div>
                        {errors.temperament && (
                            <span className={styles.errorTemperament}>{errors.temperament}</span>
                        )}
                    </div>
                </div>

                {/*************************************/}
                {/*****        BOTON ENVIAR       *****/}
                {/*************************************/}
                <div className={styles.formField}>
                    <div style={{ display: 'inline-block' }}>
                        <button
                            type="submit"
                            style={{ marginTop: '10px', marginLeft: '10px' }}
                            onClick={handleSubmit}
                            disabled={!errors.ok}
                            className={styles.submitButton}
                        >
                            Enviar
                        </button>
                    </div>
                    <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                        <button
                            onClick={handleCancel}
                            style={{ marginTop: '10px' }}
                            className={styles.cancelButton}
                        >
                            Cancel
                        </button>
                    </div>
                </div>

                <div className={styles.messageContainer}>
                    {errors.message !== "" && errors.message ? (
                        <span className={styles.message}>
                            {errors.message}
                        </span>
                    ) : (
                        <span style={{color:"red"}}>{errors.message}</span>
                    )}
                </div>

            </form>
        </div>
    );
};
export default FormNewDog;

