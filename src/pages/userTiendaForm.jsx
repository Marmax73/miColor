// frontend/src/components/SignUpTienda.jsx
import { useState } from 'react';
import axios from 'axios';
import BotonRetorno from '../components/BotonRetorno';

const SignUpTienda = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    nombre: '',
    nombreComercial: '',
    direccion: '',
    localidad: '',
    cuit: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register/tienda', form); // Ruta backend
      const { token } = res.data;
      localStorage.setItem('token', token); // Guarda el JWT
      alert('Usuario tienda creado con éxito');
    
     } catch (err) {
       if (err.response) {
    console.error('Error del servidor:', err.response.data);
    alert(err.response.data.error || 'Error al registrarse');
    } else {
    console.error('Error desconocido:', err.message);
    alert('Error al registrarse');
    }
  }

  }
  

  return (
    <>
    <div className="flex flex-col items-center justify-center h-[50vh] w-full px-4 mt-20">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-4 border border-pink-500 rounded-md space-y-4 bg-white shadow"
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre responsable"
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
       
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="nombreComercial"
        placeholder="Nombre comercial"
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="localidad"
        placeholder="Localidad"
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="cuit"
        placeholder="CUIT"
        onChange={handleChange}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
      >
        Crear cuenta Tienda
      </button>
    </form>

    <div className="mt-4">
      <BotonRetorno />
    </div>
  </div>
</>


  );
};

export default SignUpTienda;
