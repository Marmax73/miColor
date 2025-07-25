import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import ManejarDimensionPantalla from '../utils/DimensionPantalla';
import SignUp from '../pages/SignUp';


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
        <nav className="nav flex justify-between items-center text-white p-0">
          <div className="flex items-center gap-6">
            <img src="/logo2.png" alt="Logo" className="w-20 h-23 p-0" />
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
              <SignUp />
            </li>
          </ul>
        </nav>
      ) : (
        // Vista móvil con menú hamburguesa
        <div className="relative ">
          
                <img src="/logo2.png" alt="Logo" className=" w-25 h-25 p-0 sm:h-1 mx-auto mt-0 mb-0 justify-center" />
          
          <button onClick={toggleMenu} className="text-pink-700 hover:scale-110 hover:border-pink-600 hover:border-1 cursor-pointer ml-auto text-xl p-2 transition-1000 ">

            ☰
          </button>

          {show && (
            <div className="absolute  top-full w-full bg-pink-200 text-white p-4 z-50 ">

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
                 <SignUp />
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