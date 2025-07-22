
import { useState, useEffect } from 'react';

function ManejarDimensionPantalla() {
  const [dimension, setDimension] = useState({
    ancho: window.innerWidth,
    alto: window.innerHeight
  });

  useEffect(() => {
    const manejarResize = () => {
      setDimension({
        ancho: window.innerWidth,
        alto: window.innerHeight
      });
    };

    window.addEventListener('resize', manejarResize);

    return () => {
      window.removeEventListener('resize', manejarResize);
    };
  }, []);
  
  return dimension;
}
export default ManejarDimensionPantalla;