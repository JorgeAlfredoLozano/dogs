import React from "react";
import {Link} from "react-router-dom";
import styles from './card.module.css';
import noImage from '../../assets/no_image.png';

export default function Card({ id,image, name, temperament, temperaments, weight }) {
  const finalTemperament = temperament || temperaments;
  
  return (
    <div className={styles.card}>
      <h2 className={styles["card-title"]}>{name}</h2>
      <Link to={`/dogs/${id}`} style={{ display: "flex" }}>
      <img className={styles["card-img"]} src={image === "no_image" ? noImage : image.url} alt={name} />
      </Link>
      <p className={styles["card-text"]}>
        {weight
          ? `Weight: ${weight.imperial} lbs (${weight.metric} kg)`
          : "Weight not available"}
      </p>
      <p className={styles["card-text"]}>
        {finalTemperament ? `Temperament: ${finalTemperament}` : null}
      </p>
    </div>
  );
}
