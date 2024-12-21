import React from 'react';

const ProductCard = ({ image, title, description, link }) => {
  return (
    <div className="product-item bg-white p-4 h-[450px] w-[450px] flex flex-col items-center justify-center gap-8 rounded-lg border border-primary-color">
      <img src={image} alt={title} className="h-24 bg-primary-color p-6 rounded-2xl" />
      <h2 className="text-2xl">{title}</h2>
      <p className="text-xl">{description}</p>
      <a href={link} className="px-6 py-4 bg-primary-color text-btn-text-color text-xl rounded-2xl transition-all hover:bg-secondary-color">Learn More</a>
    </div>
  );
};

export default ProductCard;
