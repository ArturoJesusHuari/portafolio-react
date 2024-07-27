import React, { useState } from 'react';
import Componente1 from './components/component1.jsx';
import Componente2 from './components/component2.jsx';
import Componente3 from './components/component3.jsx';
import './App.css';

const App = () => {
  const [color1, setColor1] = useState('blue');
  const [color2, setColor2] = useState('green');
  const [color3, setColor3] = useState('skyblue');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    setColor2(getRandomColor());
    setColor3(getRandomColor());
    setColor1(getRandomColor());
  };

  return (
    <div className="App">
      <Componente1 color={color1} changeColor={changeColor}/>
      <Componente2 color={color2} changeColor={changeColor}/>
      <Componente3 color={color3} changeColor={changeColor}/>
    </div>
  );
};

export default App;