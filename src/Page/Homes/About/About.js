import React from 'react';
import about from '../../../Sabbir portfolio/About me.jpeg'

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row my-10">
                <img src={about} className="lg:w-1/2 rounded-lg shadow-2xl mx-auto" alt=''/>
                <div className='text-center'>
                    <h1 className="text-5xl my-5 font-bold text-green-600">About Me</h1>
                    <p className="py-6 max-w-lg text-start mx-auto">I have done two web development courses. I am React Front-End Developer. I can make Responsive Website by using React.js and more tools. I am quick learner and love to coding with new things. Front-end and Back-End both are doing well and work also sever-side, api create, management and maintaining by using MongoDB. I have 20+ website development project completed. My dream to make new thing with new technology. Coding is my passion.  </p>
                </div>
            </div>
        </div>
    );
};

export default About;