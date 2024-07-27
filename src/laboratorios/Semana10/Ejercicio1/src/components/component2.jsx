import React from 'react';
import Componente1 from './component1.jsx';

const Componente2 = ({ color, changeColor }) => {
  return <Componente1 color={color} changeColor={changeColor} />;
};

export default Componente2;