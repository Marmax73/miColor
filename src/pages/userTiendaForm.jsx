
                

      import CamaraCaptura from "../components/camaraCaptura";
import BotonRetorno from "../components/BotonRetorno";

const UserTiendaForm = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4 text-center min-h-screen">
      <h1 className="text-xl font-semibold">Bienvenida, estás por ingresar como Vendedora</h1>
      <p className="text-base">Aquí podrás encontrar una variedad de productos y servicios.</p>

      <div className="w-[80%] aspect-video mb-4 flex flex-col items-center justify-center gap-2">
        <h4 className="text-lg font-medium">Escanéa tus productos</h4>
        <CamaraCaptura />
      </div>

      <hr className="w-full border-t border-gray-300" />

      <div className="mt-1">
        <BotonRetorno />
      </div>
    </div>
  );
};

export default UserTiendaForm;
          
                
                
