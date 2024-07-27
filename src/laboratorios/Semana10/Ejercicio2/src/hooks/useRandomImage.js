import { useState, useEffect } from 'react';

const images = [
  'https://cdn.pixabay.com/photo/2017/09/03/00/44/png-2709031_640.png',
  'https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png',
  'https://cdn.pixabay.com/photo/2017/09/10/00/29/png-2734006_640.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png',
  'https://static.vecteezy.com/system/resources/thumbnails/027/254/720/small_2x/colorful-ink-splash-on-transparent-background-png.png',
];

const useRandomImage = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const changeImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    };

    const intervalId = setInterval(changeImage, 300);

    return () => clearInterval(intervalId);
  }, []);

  return currentImage;
};

export default useRandomImage;