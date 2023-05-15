import axios from 'axios';
import { Link,useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import noImage from '../../assets/no_image.png';
import styles from './detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/dogs/${id}`)
    .then(({ data }) => {
      console.log(data.name )
      if (Object.keys(data).length === 0) {
        setError(true);
      } else {
        setDog(data[0]);
      }
    })
    .catch(() => {
      setError(true);
    });
  }, [id]);

  if (error) {
    return <p>No hay perros con ese ID</p>
  }



  const finalTemperament = dog.temperament || dog.temperaments;
  const dogImage = dog.image && dog.image.url !== "no_image" ? dog.image.url : noImage;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link to="/home" className={styles.closeButton}>
          X
        </Link>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{dog.name}</h2>
        </div>
        <div className={styles.cardBody}>
          <img className={styles.cardImg} src={dogImage} alt={dog.name} />
          <div className={styles.cardInfo}>
            <p className={styles.cardText}>
              {dog.weight
              ? `Weight: ${dog.weight.imperial} lbs (${dog.weight.metric} kg)`
              : "Weight not available"}
            </p>
            <p className={styles.cardText}>
              {dog.height
              ? `Height: ${dog.height.imperial} inches (${dog.height.metric} cm)`
              : "Height not available"}
            </p>
            <p className={styles.cardText}>
              {finalTemperament ? `Temperament: ${finalTemperament}` : null}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

