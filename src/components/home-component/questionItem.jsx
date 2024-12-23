import React from 'react';

const Question = ({ title, description }) => {
  return (
    <div className="px-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Question;
