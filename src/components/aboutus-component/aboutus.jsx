import React from 'react';
import Footer from '../footer';
import AboutUsHeading from './about-heading';
import ProductSuite from './product-suite';
import Partners from './about-partner';
import AboutUsIntegration from './about-integration';
import bankit from '../../images/bankit.png';
import icici from '../../images/icici.jpg';
import payu from '../../images/payu.png';
import sbmBank from '../../images/sbm bank.png';
import yesBank from '../../images/yes bank.jpg';


const AboutUs = () => {
    const images = [bankit, icici,  payu, sbmBank, yesBank];

    return (
        <>
            {/* About Us Heading Section */}
            <AboutUsHeading />
            <ProductSuite/>
            {/* Features Section */}
            <AboutUsIntegration/>


             {/* Partners Section */}
             <div className="relative overflow-hidden h-[40vh] pt-10 pb-6 bg-gray-200">
                <h1 className="text-center text-2xl md:text-5xl lg:text-6xl pt-4 font-extrabold tracking-wide mb-10 text-secondary-color">
                    Our Partners
                </h1>
                <div className="flex w-full animate-slide space-x-8 px-4 sm:px-8 pt-10 pb-15 md:px-16 lg:px-24">
                    {/* Render images with rounded borders */}
                    {images.map((image, index) => (
                        <Partners key={index} photo={image} border="rounded" />
                    ))}
                    {/* Duplicate images for seamless loop */}
                    {images.map((image, index) => (
                        <Partners key={`duplicate-${index}`} photo={image} border="rounded"/>
                    ))}
                </div>
            </div>

    
        </>
    );
};

export default AboutUs;
