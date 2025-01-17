import React from 'react';
import reasondata from './reasondata';

const ReasonSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h3 className="text-5xl text-secondary-color font-bold text-center mb-16">
        Why Choose Our Payment Gateway APIs?
      </h3>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {reasondata.map((reason, index) => (
            <div
              key={index}
              className={`p-10 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
                index % 2 === 0
                  ? 'bg-primary-color text-black' // Alternating background color 1
                  : 'bg-white text-black' // Alternating background color 2
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-md">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonSection;
