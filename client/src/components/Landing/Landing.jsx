import React from 'react';
import { Link } from 'react-router-dom';
import fondo_land from '../../assets/fondo_land.gif';
import gifperro from '../../assets/perro-animado.gif';

export default function LandingPage() {
  

  return (
    <div>
      <Link to="/home">
        <div
          style={{
            backgroundImage: `url(${fondo_land})`,
            backgroundSize: '90%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <img style={{
            marginLeft: '-370px',
            marginTop: '125px',
            width: '15%',
            }} src={gifperro} alt="Gif Animado" loop />
        </div>
      </Link>
    </div>
  );
}
