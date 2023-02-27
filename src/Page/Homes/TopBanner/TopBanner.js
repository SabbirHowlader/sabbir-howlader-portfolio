import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin} from "react-icons/fa";

const TopBanner = () => {
    return (
        <div className="hero lg:min-h-screen bg-no-repeat mb-10" style={{ backgroundImage: `url("https://www.codewizardshq.com/wp-content/uploads/2021/12/M22-Interactive-web-with-javascript-banner.jpg")`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='p-2'>
                    <h1 className="mb-5 text-5xl font-bold">Hi, I am <span className='text-orange-400'>Sabbir Howlader</span></h1>
                    <p className="mb-5 max-w-lg">I am Front-End React Developer. I can provide clean code and make Responsive website by usinig HTML, CSS, Bootstrap, JavaScript, React.js, React-hook-form, Node.js, TailwindCss, Daisy UI, Firebase-Authentication, MongoDB, Versel, figma and more.</p>
                    <div className='flex justify-center mt-10 gap-10 text-4xl font-bold '>
                        <a className='hover:text-orange-400' href="https://github.com/SabbirHowlader"><FaGithub></FaGithub></a>
                        <a className='hover:text-orange-400'href="https://www.linkedin.com/in/sabbir-howlader60/"><FaLinkedin></FaLinkedin></a>
                        <a className='hover:text-orange-400'  href="https://www.facebook.com/Sabbirhowlader2/"><FaFacebook></FaFacebook></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;