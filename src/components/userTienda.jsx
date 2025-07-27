import React from 'react';
import CameraCapture from './camaraCaptura';

const UserTienda = () => {
  const handleCapture = (data) => {
    console.log('Captura recibida:', data);
    // Puedes guardar esta referencia en una base de datos o procesarla
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Registro Multimedia</h2>
      {/* Otros campos, inputs o atributos aquí */}
      <CameraCapture onCapture={handleCapture} />
    </div>
  );
};

export default UserTienda;
