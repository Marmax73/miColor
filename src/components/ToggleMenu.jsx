import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Nav = () => {
  const [show, setShow] = useState(true);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    
    <>      
      {show ? (
        <div className='nav flex justify-between items-center text-white '>
          <div className="flex items-center gap-4  justify-between">
            <ul className="flex items-center gap-4  justify-between">
              <li className='cursor-pointer' onClick={toggleMenu}>
                <Link to="/" className="nav-links">Inicio</Link>
              </li>
              <li className='cursor-pointer' onClick={toggleMenu}>
                <Link to="/nosotros" className="nav-links">Sobre nosotros</Link>
              </li>
              <li className="cursor-pointer" onClick={toggleMenu}>
                <Link to="/contacto" className="nav-links">Contacto</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li>
                <Link to="/signin">Iniciar sesión</Link>
              </li>
              <li>
                <Link to="/signup">Registrarse</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div onClick={toggleMenu} className='cursor-pointer text-white'>
          {" ☰ "}
          <span className='text-sm'>Menu</span>
        </div>
        
      )
      
      }
    </>
    
  );
}  

export default Nav;
