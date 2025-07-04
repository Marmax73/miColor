
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [skinTone, setSkinTone] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (tone) => setSkinTone(tone);

  const handleSubmit = () => {
    if (skinTone) navigate(`/results?skinTone=${skinTone}`);
  };

  return (
    <div className="min-h-screen bg-nude flex flex-col items-center justify-center px-4 py-8 font-sans">
      <h1 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-6 text-center">
        ¿Cuál es tu tono de piel?
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {["claro", "medio", "oscuro", "oliva"].map((tone) => (
          <button
            key={tone}
            onClick={() => handleSelect(tone)}
            className={`px-6 py-3 rounded-xl border-2 font-medium transition-all
              ${
                skinTone === tone
                  ? "bg-pink-400 text-white border-pink-600 shadow-md"
                  : "bg-white text-pink-600 border-pink-200 hover:border-pink-400"
              }`}
          >
            {tone}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!skinTone}
        className="mt-4 px-6 py-3 rounded-full bg-pink-600 text-white font-semibold shadow-md disabled:opacity-40 transition"
      >
        Ver recomendaciones
      </button>
    </div>
  );
}
