const CameraControls = ({
  onStart,
  onStop,
  onRotate,
  onPhoto,
  onRecord,
  onStopRecord,
  recording,
  stream
}) => (
  <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur flex justify-around p-3">
    {!stream ? (
      <button onClick={onStart} className="btn-primary">Iniciar</button>
    ) : (
      <>
        <button onClick={onRotate} className="btn-secondary">Rotar</button>
        <button onClick={onPhoto} className="btn-success">📸</button>
        {!recording ? (
          <button onClick={onRecord} className="btn-danger">🎥</button>
        ) : (
          <button onClick={onStopRecord} className="btn-warning">⏹</button>
        )}
        <button onClick={onStop} className="btn-gray">Detener</button>
      </>
    )}
  </div>
);

export default CameraControls;
