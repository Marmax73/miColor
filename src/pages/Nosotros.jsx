import BotonRetorno from "../components/BotonRetorno"


const Nosotros = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sobre Nosotros</h1>
      <p>
        Bienvenido a nuestra página de "Sobre Nosotros". Aquí puedes encontrar información sobre nuestra empresa, nuestra misión y nuestro equipo.
      </p>
      <p>
        Nos dedicamos a ofrecer los mejores servicios y productos para satisfacer las necesidades de nuestros clientes. Nuestro equipo está compuesto por profesionales apasionados y comprometidos con la excelencia.
      </p>
      <div>
        <BotonRetorno />
      </div>
    </div>
  );
}
export default Nosotros;