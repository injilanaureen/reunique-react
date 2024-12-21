import React from 'react';
import onlinebanking from '../../images/online-banking.png';
import Partners from './about-partner';
import icici from '../../images/icicibank.png';
import kotakbank from '../../images/Kotak_Mahindra_Bank_logo.png';
import yesBank from '../../images/yes-bank.png';
import unionBank from '../../images/union.png';


const AboutUsHeading = () => {
  const images = [icici, kotakbank, yesBank,unionBank];
  return (

    <>
     <div className="pt-24 h-screen bg-gradient-to-br from-primary-color to-secondary-color border border-gray-500 rounded shadow-sm"> 
    
      <div className="w-full">
          <img
            src={onlinebanking}
            alt="banking"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
          />
        </div>
        
        <div className="about-herosection flex flex-col items-start gap-5 justify-center h-full max-w-screen-xl mx-auto text-lg leading-relaxed pt-20">
  <h1 className="about-heading tracking-widest text-6xl pb-4 text-secondary-color font-bold">About us</h1>

  <p className="leading-loose z-0 text-2xl text-black">
    PeUnique, a platform by NikatBy, emerges as a pioneering force in India's payment and API banking landscape.
    Our comprehensive suite of solutions empowers businesses across the nation to seamlessly accept payments and
    facilitate payouts through an extensive network of over 180 payment modes, all streamlined through a simple
    integration process.
  </p>

  <p className="leading-loose z-0 text-2xl text-black">
    With the trust of over global businesses, PeUnique leads the industry in payment collections, vendor and
    salary payouts, bulk refunds, expense reimbursements, and loyalty programs. Our platform serves as the
    backbone for businesses of all sizes, enabling them to thrive in today's digital economy.
  </p>

  <p className="leading-loose z-0 text-2xl text-black">
    Founded in 2024 and headquartered in Noida with regional offices across India, PeUnique is a rapidly advancing
    fintech company. We are committed to delivering simplified payment solutions with customizable options
    tailored to meet each client’s needs.
  </p>

  {/* Bank Partners Section */}
  <div className="mt-12 w-full">
    <h2 className="text-3xl justify-center text-secondary-color font-semibold mb-6">Bank Partners</h2>
    <div className="flex flex-wrap justify-start gap-8">
      {images.map((image, index) => (
        <Partners key={index} size="small" photo={image}  />
      ))}
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default AboutUsHeading;
