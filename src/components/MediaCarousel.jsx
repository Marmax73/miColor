const MediaCarousel = ({ media }) => {
  const width = media.length > 0 ? 'w-full' : 'hidden';
  return (
    <div className={`flex overflow-x-auto ${width} p-2 gap-2`}>
      {media.map((item, idx) => (
        <div key={idx} className="w-1/3 h-20 bg-gray-300 rounded overflow-hidden">
          {item.type === 'photo' ? (
            <img src={item.src} className="w-full h-full object-cover" />
          ) : (
            <video src={item.src} className="w-full h-full object-cover" />
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaCarousel;
