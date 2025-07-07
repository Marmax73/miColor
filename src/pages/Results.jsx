// src/pages/Results.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";//enrutador entre archivos
import recommendations from "../data/recommendations.json";

export default function Results() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const skinTone = params.get("skinTone");

  const colors = recommendations[skinTone];
  const [ColorSwatch, setColorSwatch] = useState(null);

  useEffect(() => {
    // Importación dinámica
    import("../components/cajaDeColor").then((mod) => {
      setColorSwatch(() => mod.default);
    });
  }, []);

  if (!colors) return <p>No hay datos para este tono.</p>;
  if (!ColorSwatch) return <p>Cargando recomendaciones...</p>;

  return (
    <div className="min-h-screen bg-white px-4 py-8 font-sans">
      <h1 className="text-2xl md:text-3xl font-semibold text-pink-600 text-center mb-6">
        Recomendaciones para piel {skinTone}
      </h1>
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        {["ropa", "labial", "uñas"].map((categoria) => (
          <div
            key={categoria}
            className="bg-nude rounded-xl p-4 shadow-sm border border-pink-100"
          >
            <h2 className="text-xl font-bold text-pink-500 mb-2 capitalize">
              {categoria}
            </h2>
            <ul className="space-y-1">
              {colors[categoria].map((c, i) => (
                <li key={i} className="text-pink-800">
                  <ColorSwatch name={c} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="/">

        <button className="bg-pink-500 text-white px-4 py-2 rounded-md" >
          Volver a empezar
        </button>
        </a>
      </div>
    </div>
  );
}
