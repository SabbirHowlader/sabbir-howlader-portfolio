import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import MyWork from '../MyWork/MyWork';
import Skill from '../Skill/Skill';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <About></About>
            <Skill></Skill>
            <MyWork></MyWork>
            <Contact></Contact>
        </div>
    );
};

export default Home;