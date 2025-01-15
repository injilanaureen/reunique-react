import React from 'react';

const Question = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-2/3 mx-auto mb-6" data-aos="fade-left">
      <h4 className="text-3xl font-semibold text-tertiary-color mb-4">
        {title}
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Question;
