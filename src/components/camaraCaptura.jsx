import React, { useRef, useState } from 'react';
import { toggleCameraFacingMode } from '../utils/toggleCameraFacingMode';

const CameraCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [facingMode, setFacingMode] = useState('user'); // frontal por defecto

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
    } catch (error) {
      console.error('Error al iniciar cámara:', error);
      alert('No se pudo acceder a la cámara. Verificá los permisos.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setStream(null);
  };

  const rotateCamera = () => {
    const newFacingMode = toggleCameraFacingMode(facingMode);
    setFacingMode(newFacingMode);
    stopCamera();
    setTimeout(startCamera, 500); // Reiniciar con la nueva cámara
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    localStorage.setItem('lastPhoto', imageData);
    onCapture?.({ type: 'photo', data: imageData });
  };

  const startRecording = () => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    const chunks = [];

    mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);

      localStorage.setItem('lastVideo', url);
      onCapture?.({ type: 'video', data: url });
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-[75vh] object-cover bg-black"
      />

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Controles móviles, posicionados al pie */}
      <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md flex justify-around items-center p-2 gap-2">
        {!stream ? (
          <button
            onClick={startCamera}
            className="bg-blue-600 hover:bg-blue-400 text-white text-sm px-4 py-2 rounded-full"
          >
            Iniciar cámara
          </button>
        ) : (
          <>
            <button
              onClick={rotateCamera}
              className="bg-indigo-600 hover:bg-indigo-400 text-white text-sm px-4 py-2 rounded-full"
            >
              Rotar cámara
            </button>
            <button
              onClick={takePhoto}
              className="bg-green-600 hover:bg-green-400 text-white text-sm px-4 py-2 rounded-full"
            >
              Tomar foto
            </button>
            {!recording ? (
              <button
                onClick={startRecording}
                className="bg-red-600 hover:bg-red-400 text-white text-sm px-4 py-2 rounded-full"
              >
                Iniciar video
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="bg-yellow-500 hover:bg-yellow-300 text-white text-sm px-4 py-2 rounded-full"
              >
                Detener video
              </button>
            )}
            <button
              onClick={stopCamera}
              className="bg-gray-600 hover:bg-gray-400 text-white text-sm px-4 py-2 rounded-full"
            >
              Detener cámara
            </button>
          </>
        )}
      </div>

      {/* Vista previa del video grabado */}
      {videoUrl && (
        <video
          src={videoUrl}
          controls
          className="w-full mt-2 rounded-lg shadow"
        />
      )}
    </div>
  );
};

export default CameraCapture;
