import React, { useRef, useState } from 'react';

const CameraCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const startCamera = async () => {
     try {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    videoRef.current.srcObject = mediaStream;
    setStream(mediaStream);
  } catch (error) {
    console.error("Error al iniciar cámara:", error);
    alert("No se pudo acceder a la cámara. Verificá los permisos.");
  }
    console.log('Video Ref:', videoRef.current);

  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setStream(null);
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    // Guardar en localStorage
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

      // Guardar referencia temporal
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
    <div className="flex flex-col gap-2 p-2 border rounded-lg shadow bg-white">
      <video ref={videoRef} autoPlay playsInline className="w-full rounded" />

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div className="flex justify-between gap-2">
          <button onClick={startCamera} className="bg-blue-500 hover:bg-blue-200 text-white px-3 py-1 rounded">
            Iniciar cámara
          </button>
        
        {stream && (
          <>
            <button onClick={takePhoto} className="bg-green-500 text-white px-3 py-1 rounded">
              Tomar foto
            </button>
            {!recording ? (
              <button onClick={startRecording} className="bg-red-500 text-white px-3 py-1 rounded">
                Grabar video
              </button>
            ) : (
              <button onClick={stopRecording} className="bg-yellow-500 text-white px-3 py-1 rounded">
                Detener grabación
              </button>
            )}
            <button onClick={stopCamera} className="bg-gray-500 text-white px-3 py-1 rounded">
              Detener cámara
            </button>
          </>
        )}
      </div>

      {videoUrl && (
        <video src={videoUrl} controls className="mt-2 w-full rounded" />
      )}
    </div>
  );
};

export default CameraCapture;
