import React from 'react';
import wave from "../../images/wave.svg"
import mainimage from "../../images/main_img.jpg"

const MainSection = () => {
  return (
    <section id="main" className="relative mt-32 py-16 px-6 grid grid-cols-1">
      <img  src={wave} alt="" className="absolute w-full left-0 bottom-24 lg:bottom-0 z-[-300]" />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 align-middle justify-items-center justify-center items-center gap-16">
        <div className="flex flex-col gap-8 ">
          <h1 className="text-3xl font-bold md:text-6xl">Welcome to PeUnique</h1>
          <h1 className="text-5xl font-bold md:text-4xl">Secure Payment Gateways Integration for Every Business</h1>
          <p className="text-lg md:text-2xl mt-4 leading-loose">Simplify your transactions with our Advanced Payment Gateways integration services. From UPI payment gateways to comprehensive payment provider services, we ensure smooth payment gateway integration to websites, apps, and businesses of all sizes.</p>
        </div>
        <img src={mainimage} alt="" className="h-[380px] lg:h-[750px] mix-blend-multiply" />
      </div>
    </section>
  );
};

export default MainSection;