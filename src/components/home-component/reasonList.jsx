import React from 'react';

const ReasonList = ({ index,reason }) => {
  return (
    <div
        key={index}
        className={`
        p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl
        ${index % 3 === 0 ? 'bg-slate-800 text-white md:mt-0' : ''}
        ${index % 3 === 1 ? 'bg-white md:-mt-8' : ''}
        ${index % 3 === 2 ? 'bg-slate-800 text-white md:mt-12' : ''}
        `}
    >
      <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
      <p className={`text-sm ${
        index % 3 === 1 || index === 3 ? 'text-gray-600' : 'text-gray-300'
      }`}>
        {reason.description}
      </p>
    </div>
  );
};

export default ReasonList;
