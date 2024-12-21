import React, { useEffect, useState } from 'react';
import ProductCard from './productItem'; // Import the ProductCard component
import { data } from 'autoprefixer';
import productData from "./productdata.json"

const ProductSection = () => {
  // const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //   fetch('./productdata.json')
  //     .then(response => response.json())
  //     .then(data => setProductData(data))
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <section>
      <div className="product-container text-center py-16">
        <h1 className="text-4xl">Product Suite</h1>
        <p className="text-2xl mt-4">Payment solutions for all your business needs!</p>
      </div>
      <div className="product flex flex-row justify-center gap-8 mt-16">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            link={product.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
