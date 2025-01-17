import React from 'react';
import FeatureList from './featureList';
import featuredata from './featuredata';

const FeatureSection = () => {
  return (
    <section>
      <div className="min-h-screen p-8 mt-10">
        <div className="max-w-7xl mx-auto text-center">
            <h4 className='text-5xl text-secondary-color font-bold mt-16'>Features of Our Payment Gateways:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-16 p-4">
                    {featuredata.map((product, index) => (
                    <FeatureList
                        key={index}
                        index={index} // Pass the index
                        feature={product} // Pass the product data as "feature"
                    />
                    ))}
                </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
