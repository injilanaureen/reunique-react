import React from 'react';
import GatewayItem from './gatewayItem'; // Import the reusable component
import gatewayData from './gatewayData.json'; // Import the JSON data


const GatewaySection = () => {
 

  return (
    <section>
      <div className="gateway-container text-center py-16">
        <h1 className="text-4xl">Payment Gateway Solution for all Businesses</h1>
        <p className="text-2xl mt-4">PeUnique provides a vast range of products and capabilities, and a high level of competence to all kinds of Businesses.</p>
      </div>
      <div className="gateway-content flex flex-wrap justify-center gap-8 mt-16">
        {gatewayData.map((item, index) => (
          <GatewayItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            altText={item.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default GatewaySection;
