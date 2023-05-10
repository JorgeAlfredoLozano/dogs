import React from "react";
import "./Card.css";

export default function Card({ image, name, temperament, weight }) {
  return (
    
    <div className="card">
      
        <h2 className="card-title">{name}</h2>
        
      <img className="card-img" src={image.url} alt={name} />
      
        <p className="card-text">
          {weight
            ? `Weight: ${weight.imperial} lbs (${weight.metric} kg)`
            : "Weight not available"}
        </p>
        <p className="card-text">
          {temperament ? `Temperament: ${temperament}` : null}
        </p>
      
    </div>
  );
}
