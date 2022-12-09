import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-300">
            <div>
                <p className="font-bold">
                    Sabbir Howlader <br />React Front-End Web Developer
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-5 text-2xl">
                    <a className='hover:text-orange-400' href="https://github.com/SabbirHowlader"><FaGithub></FaGithub></a>
                    <a className='hover:text-orange-400' href="https://www.linkedin.com/in/sabbir-howlader60/"><FaLinkedin></FaLinkedin></a>
                    <a className='hover:text-orange-400' href="https://www.facebook.com/Sabbirhowlader2/"><FaFacebook></FaFacebook></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;