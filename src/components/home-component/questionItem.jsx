import React from 'react';

const Question = ({ title, description }) => {
  return (
    <div className="que">
      <h1 className="text-2.5xl">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Question;
