
import React from "react";

const colorMap = {
  // colores más comunes (puedes ampliar esta lista)
  "celeste": "#ADD8E6",
  "lavanda": "#E6E6FA",
  "beige": "#F5F5DC",
  "rosa claro": "#FFB6C1",
  "melocotón": "#FFDAB9",
  "nude": "#F2D2BD",
  "rosa pastel": "#FFD1DC",
  "coral": "#FF7F50",
  "verde oliva": "#808000",
  "azul marino": "#000080",
  "rojo": "#FF0000",
  "rosado oscuro": "#C71585",
  "bordó": "#800020",
  "terracota": "#E2725B",
  "rojo vino": "#722F37",
  "mostaza": "#FFDB58",
  "turquesa": "#40E0D0",
  "ciruela": "#8E4585",
  "negro": "#000000",
  "dorado": "#FFD700",
  "fucsia": "#FF00FF",
  "cobre": "#B87333",
  "verde jade": "#00A86B",
  "marrón cálido": "#8B4513",
  "verde seco": "#556B2F",
  "bronce": "#CD7F32"
};

export default function ColorSwatch({ name }) {
  const backgroundColor = colorMap[name.toLowerCase()] || "#ccc";

  return (
    <span className="flex items-center gap-2">
      <span
        className="inline-block w-4 h-4 rounded-full border border-gray-400"
        style={{ backgroundColor }}
        title={name}
      ></span>
      <span>{name}</span>
    </span>
  );
}
