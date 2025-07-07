import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        ¿No tenés cuenta?
      </button>
      {isOpen && (
        <ul className="dropdown-menu justify-items-end">
          <li className="dropdown-item">Inscribirme</li>
          <li className="dropdown-item">Entrar</li>
          
        </ul>
      )}
    </div>
  );
}

export default Dropdown;