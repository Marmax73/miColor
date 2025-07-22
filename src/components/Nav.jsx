import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import ManejarDimensionPantalla from '../utils/DimensionPantalla';

const Nav = () => {
  const [show, setShow] = useState(false);
  const { ancho } = ManejarDimensionPantalla();
  const isMobile = ancho < 764;

  const toggleMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {!isMobile ? (
        // Vista de escritorio
        <nav className="nav flex justify-between items-center text-white">
          <div className="flex items-center gap-6">
            <img src="/logo.png" alt="Logo" className="w-20 h-20" />
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="nav-links">Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros" className="nav-links">Sobre nosotros</Link>
              </li>
              <li>
                <Link to="/contacto" className="nav-links">Contacto</Link>
              </li>
            </ul>
          </div>
          <ul className="flex gap-4">
            <li>
              <Link to="/signin">Iniciar sesión</Link>
            </li>
            <li>
              <Link to="/signup">Registrarse</Link>
            </li>
          </ul>
        </nav>
      ) : (
        // Vista móvil con menú hamburguesa
        <div className="relative">
          <button onClick={toggleMenu} className="text-pink-700 cursor-pointer text-2xl p-2 transition-1000">

            ☰
          </button>

          {show && (
            <div className="absolute left-0 top-full w-full bg-pink-200 text-white p-4 z-50 ">
              <ul className="flex flex-col gap-4">
                <li onClick={toggleMenu}>
                  <Link to="/" className="nav-links">Inicio</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/nosotros" className="nav-links">Sobre nosotros</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/contacto" className="nav-links">Contacto</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/signin" className="nav-links">Iniciar sesión</Link>
                </li>
                <li onClick={toggleMenu}>
                  <Link to="/signup" className="nav-links">Registrarse</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Nav;