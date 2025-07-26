import BotonRetorno from "../components/BotonRetorno";
const userTienda = () => {
    return (
        <div className="p-4">
            <h1>Bienvenida estas por ingresar como Vendedora</h1>
            <p>Aquí podrás encontrar una variedad de productos y servicios.</p>
            <div>
                <BotonRetorno />
            </div>
        </div>
    );
}
export default userTienda;