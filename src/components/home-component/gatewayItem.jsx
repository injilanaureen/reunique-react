import React from "react";

const GatewayItem = ({ image, title, title2, description, altText }) => {
  return (
    <div className="gateway-items bg-secondary-color h-[480px] flex-1 max-w-xs flex flex-col justify-center items-center rounded-xl relative overflow-hidden group">
      {/* Flip Container */}
      <div className="absolute inset-0 transition-transform duration-1000 transform group-hover:rotate-y-180 preserve-3d">
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden flex flex-col justify-center items-center px-4">
          <img
            src={image}
            alt={altText}
            className="h-24 bg-primary-color p-6 rounded-3xl"
          />
          <h3 className="text-3xl text-white m-4">{title}</h3>
          
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col gap-2 justify-center items-center bg-primary-color px-5">
        <h2 className="font-bold  text-2xl text-black text-center m-2">
            {title2} for Business
          </h2>
          <p className="text text-black text-center m-1 leading-loose">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GatewayItem;
