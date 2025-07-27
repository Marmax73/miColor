export const saveMediaToDevice = (dataUrlOrBlob, filename) => {
  const a = document.createElement('a');
  a.href = typeof dataUrlOrBlob === 'string' ? dataUrlOrBlob : URL.createObjectURL(dataUrlOrBlob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
