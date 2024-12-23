import React from 'react';
import Footer from '../footer';
import AboutUsHeading from './about-heading';
import ProductSuite from './product-suite';
import Partners from './about-partner';
import AboutUsIntegration from './about-integration';


const AboutUs = () => {
    const images = ['/images/bankit.png', '/images/icici.jpg',  '/images/payu.png', '/images/sbm bank.png', '/images/yes bank.jpg'];

    return (
        <>
            {/* About Us Heading Section */}
            <AboutUsHeading />
            <ProductSuite/>
            {/* Features Section */}
            <AboutUsIntegration/>


             {/* Partners Section */}
             <div className="relative overflow-hidden h-[40vh] pt-10 pb-6 ">
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
