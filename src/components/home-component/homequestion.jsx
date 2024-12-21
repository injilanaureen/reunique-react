import React from 'react';
import Question from './questionItem';
import questionData from './questiondata.json'; // Adjust path

const QuestionSection = () => {
  return (
    <section>
      <div className="que-container flex flex-col gap-12 py-16">
        {questionData.map((question, index) => (
          <Question
            key={index}
            title={question.title}
            description={question.description}
          />
        ))}
      </div>
    </section>
  );
};

export default QuestionSection;
