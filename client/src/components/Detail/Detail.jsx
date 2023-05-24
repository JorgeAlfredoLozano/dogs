/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import noImage from '../../assets/no_image.png';
import loadingImage from '../../assets/loading.gif';
import styles from './detail.module.css';
import gifperro from '../../assets/perro-animado.gif';
import fondo_home from '../../assets/fondo_home.gif';

const Detail = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

/*************************************/
/*****   BUSCO PERRO POR ID      *****/
/*************************************/
  useEffect(() => {
    axios
      .get(`http://localhost:3001/dogs/${id}`)
      .then(({ data }) => {
        if (Object.keys(data).length === 0) {
          setDog(null);
        } else {
          setDog(data[0]);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  // if (error) {
  //   return <p>No hay perros con ese ID</p>;
  // }
  
  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };

  // SETEO LA IMAGEN SEGUN SU TIPO
  const dogImage =
  typeof dog.image === 'object'
    ? dog.image
    : dog.image === 'no_image'
    ? { url: noImage }
    : { url: dog.image };

  return (
    <div style={{
      backgroundImage: `url(${fondo_home})`,
      backgroundSize: '90%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: 'black',
    }} className={styles.container}>
      <div className={styles.card}>
        {/* Renderizo Botón de Cierre X */}
        <Link to="/home" className={styles.closeButton} title="Close Card">
         <span role="img" aria-label="Foto" className={styles.imgIcon}>&#10005;</span>
        </Link>
        <div className={styles.gifContainer}>
        <img
          className={styles.gif}
          src={gifperro}
          alt="Gif Animado"
          loop
        />
        </div>
        {/* Renderizo nombre del perro */}
        <div className={styles.cardHeader}>
          <h2 style={{background: "rgb(170, 138, 76)", color: "white"}} className={styles.cardTitle}>{dog.name}</h2>
        </div>

        {/* Renderizo el loading... y la imagen */}
        <div className={styles.cardBody}>
          {loading ? (
            <img className={styles.loadingImage} src={loadingImage} alt="Loading" />
          ) : (
            <img 
              className={`${styles.cardImg} ${isExpanded ? styles.expanded : ''}`}
              src={dogImage.url}
              alt={dog.name}
              onClick={handleImageClick}
              title='Click to expand'
              
            />
          )}
          <div className={styles.cardInfo}>
            
            {/* Renderizo el Peso (imperial y métrico) */}
            <p className={styles.cardText}>
              <span className={styles.boldText}>Weight:</span>{" "}
              <span style={{ fontStyle: 'italic' }}>
                {dog.weight
                  ? `${dog.weight.imperial} lbs (${dog.weight.metric} kg)`
                  : "Weight not available"}
              </span>
            </p>
          
            {/* Renderizo la Altura (imperial y métrico) */}
            <p className={styles.cardText}>
              <span className={styles.boldText}>Height:</span>{" "}
              <span style={{ fontStyle: 'italic' }}>
                {dog.height
                  ? `${dog.height.imperial} inches (${dog.height.metric} cm)`
                  : "Height not available"}
              </span>
            </p>
          
            {/* Renderizo los temperamentos */}
            <p className={styles.cardText}>
              <span className={styles.boldText}>Temperaments:</span>{" "}
              <span style={{ fontStyle: 'italic' }}>
                {dog.temperament
                  ? dog.temperament
                  : Array.isArray(dog.temperaments)
                  ? dog.temperaments.map(temp => temp.name).join(", ")
                  : ""}
              </span>
            </p>

            {/* Renderizo el tiempo de vida estimado */}
            <p className={styles.cardText}>
              <span className={styles.boldText}>Life Span:</span> 
              <span style={{ fontWeight: 'normal' }}>{dog.life_span}</span>
            </p>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Detail;
