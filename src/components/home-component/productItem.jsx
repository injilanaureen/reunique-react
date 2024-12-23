import React from 'react';

const ProductCard = ({ image, title, description, link }) => {
  return (
    <div className="product-item bg-white p-4 h-auto md:h-[450px] flex flex-col items-center justify-center  md:gap-6 rounded-lg border border-primary-color">
  <img src={image} alt={title} className="h-16 md:h-24 bg-primary-color p-4 md:p-6 rounded-2xl" />
  <h2 className="text-lg md:text-2xl text-center">{title}</h2>
  <p className="text-sm md:text-xl text-center line-clamp-3">{description}</p>
  <a 
    href={link} 
    className="px-4 py-2 md:px-6 md:py-4 bg-primary-color text-btn-text-color text-sm md:text-xl rounded-2xl transition-all hover:bg-secondary-color"
  >
    Learn More
  </a>
</div>

  );
};

export default ProductCard;
