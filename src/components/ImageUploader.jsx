import React, { useEffect, useState } from "react";

const AvatarUploader = () => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    // Al montar, recuperar la imagen del localStorage si existe
    const storedImage = localStorage.getItem("avatarImage");
    if (storedImage) {
      setPreview(storedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setPreview(base64Image);
        localStorage.setItem("avatarImage", base64Image); // Guardar en localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-l-pink-300 shadow cursor-pointer">
      <label className="w-full h-full block">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        {preview ? (
          <img
            src={preview}
            alt="Avatar"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
            + Img
          </div>
        )}
      </label>
    </div>
  );
};

export default AvatarUploader;
