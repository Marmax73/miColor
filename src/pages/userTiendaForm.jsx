import CamaraCaptura from "../components/camaraCaptura";

import BotonRetorno from "../components/BotonRetorno";
const userTiendaForm = () => {
    return (
        <div className="p-4 display flex flex-col items-center justify-center gap-4 text-center">
            <h1>Bienvenida estas por ingresar como Vendedora</h1>
            <p>Aquí podrás encontrar una variedad de productos y servicios.</p>
            <div className="flex w-5 h-4 justify-items-center p-3 mb-2 display-block">
                <h4>Escanéa tus productos</h4>
                <CamaraCaptura />
            </div>
            <hr />
            <div className="flex w-5  p-4 justify-items-center mt-2">
                <BotonRetorno />
            </div>
        </div>
    );
}
export default userTiendaForm;