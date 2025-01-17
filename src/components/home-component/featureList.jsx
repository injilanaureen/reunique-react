import React from 'react';

const FeatureList = ({ index, feature }) => {
  return (
    <div
      style={{
        marginTop: `${
          index % 4 === 0 ? '0' :
          index % 4 === 1 ? '3rem' :
          index % 4 === 2 ? '-2rem' :
          '1rem'
        }`
      }}
      className={`
        p-8 rounded-lg shadow-lg transition-all duration-300
        hover:shadow-xl transform hover:-translate-y-1
        ${index % 3 === 0 ? 'bg-secondary-color text-white' : ''}
        ${index % 3 === 1 ? 'bg-white' : ''}
        ${index % 3 === 2 ? 'bg-secondary-color text-white' : ''}
        ${index === 3 ? 'md:col-span-2 bg-white' : ''}
      `}
    >
      <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
      <p className={`text-sm ${
        index % 3 === 1 || index === 3 ? 'text-gray-600' : 'text-gray-300'
      }`}>
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureList;
