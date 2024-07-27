import React from 'react';

const Componente1 = ({ color, changeColor }) => {
  const style = {
    backgroundColor: color,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    width: '200px',
    margin: '10px',
  };

  return (
    <div style={style}>
      <button onClick={changeColor}>Cambiar Color</button>
    </div>
  );
};

export default Componente1;