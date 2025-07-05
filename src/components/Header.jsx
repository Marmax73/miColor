// components/Header.jsx
import React from 'react';

const Header = ({ userName, userImage }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/image/logo.png" // Reemplaza esto con la ruta real de la imagen
          alt="Logo"
          className="w-10 h-10"
        />
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#nosotros" className="hover:text-green-600 transition">Nosotros</a>
          <a href="#contacto" className="hover:text-green-600 transition">Contacto</a>
          <a href="#explorar" className="hover:text-green-600 transition">Explorar +</a>
        </nav>
      </div>

      {/* Usuario */}
      <div className="flex items-center gap-3">
        {userImage && (
          <img
            src={userImage}
            alt="Avatar del usuario"
            className="w-8 h-8 rounded-full object-cover"
          />
        )}
        <span className="text-sm text-gray-700 font-semibold">{userName}</span>
      </div>
    </header>
  );
};

export default Header;
