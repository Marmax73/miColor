// components/Header.jsx
import React from 'react';
import ImageUploader from "../components/ImageUploader"; // Asegúrate de que la ruta sea correcta
import Incripcion from "../components/inscripcion"; // Asegúrate de que la ruta sea correcta


const Header = ({ userName, userImage }) => {
  return (
    <header className="flex items-center justify-between  bg-white shadow-md w-80% border-blue-500">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <img
          src="/logo.png" // Reemplaza esto con la ruta real de la imagen
          alt="Logo"
          className="w-20 h-20 p-0 mt-2"
        />
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#nosotros" className="hover:text-green-600 transition">Nosotros</a>
          <a href="#contacto" className="hover:text-green-600 transition">Contacto</a>
          <a href="#explorar" className="hover:text-green-600 transition">Explorar +</a>
        </nav>
      </div>
       <div className='flex items-center '>
        <Incripcion />
       </div>
      {/* Usuario */}
      <div className='flex items-center'>
         <ImageUploader />
         
      </div>

      
      
    </header>
  );
};

export default Header;
