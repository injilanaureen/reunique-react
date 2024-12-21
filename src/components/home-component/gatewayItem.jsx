import React from 'react';

const GatewayItem = ({ image, title, description, altText }) => {
  return (
    <div className="gateway-items bg-secondary-color h-[420px] flex-1 max-w-xs flex flex-col justify-center items-center rounded-xl relative overflow-hidden px-8">
      <img src={image} alt={altText} className="h-24 bg-primary-color p-6 rounded-2xl" />
      <h3 className="text-2xl text-white">{title}</h3>
      <div className="gateway-child absolute top-0 left-0 w-full h-full bg-bg-color flex flex-col items-center justify-center px-8 transform translate-x-full transition-all duration-500 ease-in-out">
        <h2 className="text-3xl font-medium text-white text-center">{title} for Business</h2>
        <p className="text-lg text-white text-center">{description}</p>
      </div>
    </div>
  );
};

export default GatewayItem;
