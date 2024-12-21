import React from 'react';
import encrpted from '../../images/encrypted.png';
import encrptedimage1 from '../../images/rb_109391.png';

const AboutUsIntegration = () => {
  return (
    <div className="relative h-[95vh] flex flex-col items-center justify-center bg-gray-100">
    
      <div className="flex flex-col lg:flex-row items-center gap-24 px-8 max-w-screen-xl mx-auto">
        {/* Left Side: Blurred Image */}
        <div className="relative flex-1 flex justify-center items-center">
          <img
            src={encrpted}
            alt="Blurred Encrypted"
            className="w-[600px] h-[600px] object-cover rounded-xl shadow-lg blur-sm"
          />
        </div>

        {/* Right Side: Easy Integration Description */}
        <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 w-[500px]">
          <h1 className="text-4xl md:text-5xl pb-4 font-extrabold text-secondary-color leading-snug">
            Easy Integration
          </h1>
          <p className="text-lg md:text text-gray-700 leading-relaxed tracking-wide">
            Seamlessly integrate our advanced payment solutions into your business with minimal effort. 
            Our platform offers comprehensive APIs and cutting-edge encryption technologies, ensuring 
            a secure and efficient payment experience.
          </p>
          <p className="text-lg md:text text-gray-700 leading-relaxed tracking-wide ">
            Whether you're building an e-commerce store, managing recurring payments, or setting up 
            virtual accounts, our integration process is designed to save time and resources. Focus on 
            what matters while we take care of the technical complexities.
          </p>
     
          <button className="px-10 py-3 mt-10 text-lg font-semibold inline-flex gap-1  text-white bg-secondary-color rounded-lg shadow-md hover:bg-secondary-dark">
            Start Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(285,255,255)'}}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z"></path></svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-col items-center gap-2 px-8 mt-10  max-w-screen-xl mx-auto">
      <h1 className="text-2xl md:text-3xl pb-4 ">
      Payment Gateway Solution for all Businesses
      </h1>
          <h3 className="text-center text-lg md:text-lg lg:text-xl font-bold tracking-wider w-[600px] mb-12 leading-12 text-gray-400">
          SabPaisa provides a vast range of products and capabilities, and a high level of
          competence to all kinds of Businesses.
          </h3>
      </div>
    </div>
    
  );
};

export default AboutUsIntegration;
