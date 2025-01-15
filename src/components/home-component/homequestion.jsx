import React, { useEffect } from 'react';
import Question from './questionItem';
import questionData from './questiondata.json'; // Adjust path
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles

const QuestionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animation
  }, []);

  return (
    <section className="bg-secondary-color py-16 mt-16">
      <div className="que-container w-full flex flex-col gap-8 px-6 " data-aos="fade-up">
        <h2 className="text-5xl text-primary-color font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
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
