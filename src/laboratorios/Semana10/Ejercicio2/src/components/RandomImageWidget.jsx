import React from 'react';
import useRandomImage from '../hooks/useRandomImage.js';

const RandomImageWidget = () => {
  const currentImage = useRandomImage();

  const style = {
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0px',
    overflow: 'hidden',
  };

  return (
    <div style={style}>
      <img 
        src={currentImage} 
        alt="Random" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    </div>
  );
};

export default RandomImageWidget;