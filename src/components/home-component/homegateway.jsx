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
      <div className="gateway-content grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-16">
  {gatewayData.map((item, index) => (
    <div key={index} className='w-[300px]'>
      <GatewayItem
        image={item.image}
        title={item.title}
        title2={item.title2}
        description={item.description}
        altText={item.altText}
      />
    </div>
  ))}
</div>


    </section>
  );
};

export default GatewaySection;
