import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cierra el menú si se hace clic fuera
  useEffect((e) => {
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
       
        onClick={(e) =>{ e.stopPropagation(); setIsOpen((prev) => !prev)}}
        className="p-5 py-2 bg-pink-100 text-pink-700 text-left rounded-md hover:bg-gradient-to-r from-pink-200 to-pink-500  hover:scale-105 hover:text-white transition w-full sm:w-auto mr-2"
      >
        Darme de alta
      </button>

      {isOpen && (
        <ul
          className="absolute duration-800 mt-0 top-full w-56 bg-white border border-gray-300 rounded-md shadow-lg z-[9999]"
        >
          <li>
            <Link
              to="/userTiendaForm"
              className="block px-4 py-2 hover:bg-gray-100 text-gray-700 underline-offset-0 hover:text-pink-700"
              onClick={() =>  setIsOpen(false)}
            >
              Inscribirme como Tienda
            </Link>
          </li>
          <li>
            <Link
              to="/userClienteForm"
              className="block px-4 py-2 hover:bg-gray-100 text-gray-700 underline-offset-0 hover:text-pink-700"
              onClick={() => setIsOpen(false)}
            >
              Inscribirme como Clienta
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SignUp;
