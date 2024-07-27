import React from 'react';
import  myImage from './img/Imagen1.png'

const Componente3 = ({ color, changeColor }) => {
  const style = {
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    width: '200px',
    margin: '10px',
    position: 'relative'
  };

  return (
    <div style={style}>
      <img 
        src={myImage} 
        alt="Descripción de la imagen" 
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
      <button 
        onClick={changeColor} 
        style={{ position: 'absolute', bottom: '10px' }}
      >
        Cambiar Color
      </button>
    </div>
  );
};

export default Componente3;