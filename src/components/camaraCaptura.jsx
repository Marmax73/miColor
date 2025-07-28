import React, { useRef, useState, useEffect } from 'react';
import CameraPreview from './CameraPreview';
import CameraControls from './CameraControls';
import MediaCarousel from './MediaCarousel';
import { toggleCameraFacingMode } from '../utils/toggleCameraFacingMode';
import { saveMediaToDevice } from '../utils/saveMediaToDevice';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [recording, setRecording] = useState(false);
  const [facingMode, setFacingMode] = useState('user');
  const [videoProgress, setVideoProgress] = useState(0);
  const [capturedMedia, setCapturedMedia] = useState([]);
  const maxVideoDuration = 10; // segundos

  // Cámara
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
        audio: true,
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (err) {
      alert('No se pudo acceder a la cámara');
      console.error(err);
    }
  };

  const stopCamera = () => {
    stream?.getTracks().forEach((t) => t.stop());
    setStream(null);
  };

  const rotateCamera = () => {
    stopCamera();
    const newFacing = toggleCameraFacingMode(facingMode);
    setFacingMode(newFacing);
    setTimeout(startCamera, 400);
  };

  // Foto
  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');

    const shutter = new Audio('/assets/shutter.mp3');
    shutter.play();
    video.classList.add('animate-pulse');
    setTimeout(() => video.classList.remove('animate-pulse'), 300);

    saveMediaToDevice(imageData, 'photo.png');

    setCapturedMedia((prev) => [...prev, { type: 'photo', src: imageData }]);
  };

  // Grabación
  const startRecording = () => {
    const chunks = [];
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);

      saveMediaToDevice(url, 'video.webm');

      setCapturedMedia((prev) => [...prev, { type: 'video', src: url }]);
    };

    recorder.start();
    setRecording(true);
    setVideoProgress(0);

    // Simular progreso
    const interval = setInterval(() => {
      setVideoProgress((p) => {
        if (p >= maxVideoDuration) {
          stopRecording();
          clearInterval(interval);
          return 0;
        }
        return p + 1;
      });
    }, 1000);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <CameraPreview videoRef={videoRef} canvasRef={canvasRef} />

      {recording && (
        <div className="absolute top-2 left-2 w-11/12 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-red-500 h-full transition-all"
            style={{ width: `${(videoProgress / maxVideoDuration) * 100}%` }}
          />
        </div>
      )}

      <CameraControls
        onStart={startCamera}
        onStop={stopCamera}
        onRotate={rotateCamera}
        onPhoto={takePhoto}
        onRecord={startRecording}
        onStopRecord={stopRecording}
        recording={recording}
        stream={stream}
      />

      <MediaCarousel media={capturedMedia} />
    </div>
  );
};

export default CameraCapture;
// SIGUIENTE SOLUCIÓN PARA LA CÁMARA.
//¿Querés que integre esta cámara como parte de una PWA o que funcione offline? También puedo ayudarte a guardar los medios con IndexedDB para evitar que se pierdan al cerrar la app. ¿Te interesa?