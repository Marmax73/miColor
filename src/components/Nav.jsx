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
            <img src="/favicon-96x96.png" alt="Logo" className="w-20 h-23 p-0" />
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
            <li className='flex mt-1'>
              <Link to="/signin" className='underline-offset-0 px-3 py-1   text-pink-700 text-left rounded-md hover:bg-gradient-to-r from-pink-200 to-pink-500  hover:scale-105  transition w-full sm:w-auto mr-2 border-2 border-pink-400'>Iniciar sesión</Link>
            </li>
            <li>
              <SignUp />
            </li>
          </ul>
        </nav>
      ) : (
        // Vista móvil con menú hamburguesa
          //w-25 h-25 p-0 sm:h-1 mx-auto mt-0 mb-0 justify-center
        <div className="relative">
                <img src="/favicon-96x96.png" alt="Logo" className="justify-center mx-auto" />
          
          <button onClick={toggleMenu} className="text-pink-700 hover:scale-110 hover:border-pink-600 hover:border-1 ml-1 cursor-pointer text-xl p-2 transition-1000 ">

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
                <li onClick={toggleMenu} >
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