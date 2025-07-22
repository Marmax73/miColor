const SignUp = () => {
  return (
    <div>
      <form>
        <h2>Registrarse</h2>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" />
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" name="email" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
export default SignUp;