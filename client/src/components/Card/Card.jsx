/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import React from "react";
import {Link} from "react-router-dom";
import styles from './card.module.css';
import noImage from '../../assets/no_image.png';

export default function Card({ id,image, name, temperament, temperaments, weight }) {
  const finalTemperament = temperament || temperaments;
  const dogImage =
  typeof image === 'object'
    ? image
    : image === 'no_image'
    ? { url: noImage }
    : { url: image };
  
  return (
    <div className={styles.card}>
      {/* Renderizado de Nombre */}
      <h2 className={styles["card-title"]}>{name}</h2>
      {/* Renderizado de Imagen + link */}
      <Link to={`/dogs/${id}`} style={{ display: "flex" }}>
        <img className={styles["card-img"]} src={dogImage.url} alt={name} />
      </Link>
      {/* Renderizado de Peso */}
      <p style={{ marginTop: "0px" }}>
  {weight ? (
    <>
      <span style={{ fontWeight: "bold", fontFamily:"arial", fontSize:"14px" }}>Weight:</span>{" "}
      <span style={{ fontStyle: "italic", fontFamily:"arial", fontSize:"15px"  }}>
        {`${weight.imperial} lbs (${weight.metric} kg)`}
      </span>
    </>
  ) : (
    "Weight not available"
  )}
</p>

      {/* Renderizado de Temperamentos */}
      <p style={{ marginTop: "-10px" }}>
  {finalTemperament ? (
    <>
      <span style={{ fontWeight: "bold", fontFamily:"arial", fontSize:"14px" }}>Temperament:</span>{" "}
      <span style={{ fontStyle: "italic", fontFamily:"arial", fontSize:"15px" }}>{finalTemperament}</span>
    </>
  ) : null}
</p>

    </div>
  );
}
