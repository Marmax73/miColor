export const toggleCameraFacingMode = (currentFacingMode) => {
  return currentFacingMode === 'user' ? 'environment' : 'user';
};
