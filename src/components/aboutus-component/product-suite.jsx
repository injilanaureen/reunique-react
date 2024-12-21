import React from 'react';
import payment1 from '../../images/online-payment-svgrepo-com.svg';
import payment2 from '../../images/payment-method-svgrepo-com (2).svg';
import payment3 from '../../images/secure-payment-protection-svgrepo-com.svg';
import payment4 from '../../images/secure-payment-visa-svgrepo-com.svg';


const ProductSuites = () => {
  const productSuites = [
    {
      image: payment1,
      heading: "Online Payment Gateway",
      para: "Enjoy the hassle-free online payments platform with PeUnique Payment Gateway. We support all major modes of payment including cards, Net-Banking, UPI, Wallets, Bharat QR, and much more!",
    },
    {
      image: payment2,
      heading: "Offline Payments",
      para: "India’s first B2B collection solution that enables businesses to collect payments from their partners/dealers/agents through a Virtual Account Number (VAN) with prior validation.",
    },
    {
      image: payment3,
      heading: "B2B e-collect",
      para: "With PeUnique's eNACH, recurring payments can be processed and collected through e-mandates. Automate your payment collections to enhance cash flow management.",
    },
    {
      image: payment4,
      heading: "eNACH",
      para: "Payouts enable quick and easy money transfers online, with complete control over the transactions and a system with the easiest reconciliation and settlement.",
    },
    {
      image: payment1,
      heading: "Payment Links",
      para: "Payment Link is a link-based payment solution that lets businesses collect payments through various payment methods.",
    },
    {
      image: payment2,
      heading: "Payouts",
      para: "World’s first offline payment platform, a unique innovation that consists of offline payment methods like e-cash, e-NEFT, e-RTGS, and e-IMPS.",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-[100vh] pt-10 pb-6 bg-slate-100 border-y-2 border-bg-color">
      <h1 className="text-center text-2xl md:text-5xl lg:text-6xl pt-12 font-extrabold tracking-wide mb-6 text-secondary-color">
        Product-Suite
      </h1>
      <h3 className="text-center text-xl md:text-xl lg:text-2xl font-bold tracking-widest mb-12 text-gray-400">
        Payment solutions for all your business needs
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {productSuites.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start text-center bg-white border rounded-lg p-6 shadow-lg w-1/4"
          >
            <ProductSuiteCard
              image={product.image}
              heading={product.heading}
              para={product.para}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductSuiteCard = ({ heading, para, image }) => {
  return (
    <>
      <img
        src={image}
        alt={heading}
        className="h-24 w-24 rounded-full mb-4 object-cover"
      />
      <h4 className="text-lg font-bold mb-2">{heading}</h4>
      <p className="text-sm text-gray-600 mb-4">{para}</p>
      <a href="/" className="text-blue-500 hover:underline inline-flex gap-1">
        Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(205,255,255)'}}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15v-4H7v-2h5V7l5 5-5 5z"></path></svg>
      </a>
    </>
  );
};

export default ProductSuites;
