import React from 'react';






const Partners = ({ photo, size }) => {
  // Default size for small images
  const imageSize = size === "small" ? "h-28 w-36" : "h-36 w-48"; // Small or default size
  
  return (
    <img
      className={`p-6 object-contain  ${imageSize}`} // Apply rounded only if border is passed
      src={photo}
      alt="Partner Logo"
    />
  );
};

export default Partners;
