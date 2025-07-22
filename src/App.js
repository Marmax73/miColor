import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Results from "./pages/Results";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      <Nav />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;



