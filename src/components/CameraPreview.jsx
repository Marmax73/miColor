const CameraPreview = ({ videoRef, canvasRef }) => (
  <>
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="w-full h-[75vh] object-cover bg-black"
    />
    <canvas ref={canvasRef} style={{ display: 'none' }} />
  </>
);

export default CameraPreview;
