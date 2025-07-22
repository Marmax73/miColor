import { Link } from "react-router-dom"

const BotonRetorno = () => {
    return (
        <button className="botonHome flex p-2 bg-pink-500 rounded-sm hover:bg-pink-100 ">
            <Link to="/" className="text-white underline-offset-0">Inicio</Link>
        </button>
    )
}
export default BotonRetorno;  //exportando el componente para que pueda ser utilizado en otros