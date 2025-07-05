import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header
          userName="Marcelo"
          userImage="/user-avatar.jpg" // Reemplaza con ruta real o de tu backend
    />
     
     
      {
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      </Router>
      }
    </>

    
  );
}

export default App;
