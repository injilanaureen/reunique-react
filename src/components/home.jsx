import React from 'react';
import MainSection from './home-component/homemain';
import ProductSection from './home-component/homeproduct';
import GatewaySection from './home-component/homegateway';
import QuestionSection from './home-component/homequestion';
import FeatureSection from './home-component/homeFeatures';
import ReasonSection from './home-component/homeReason';

const Home = () => {
  return (
    <div>
    <MainSection/>
    <ProductSection/>
    <GatewaySection/>
    <QuestionSection/>
    <FeatureSection/>
    <ReasonSection/>

    </div>
  );
};

export default Home;
