import React from 'react';
import MainSection from './home-component/homemain';
import ProductSection from './home-component/homeproduct';
import GatewaySection from './home-component/homegateway';
import QuestionSection from './home-component/homequestion';

const Home = () => {
  return (
    <div>
    <MainSection/>
    <ProductSection/>
    <GatewaySection/>
    <QuestionSection/>

    </div>
  );
};

export default Home;
