import React from 'react';
import useTitle from '../../../Hook/UseTitle/UseTitle';
import About from '../About/About';
import Contact from '../Contact/Contact';
import MyWork from '../MyWork/MyWork';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <TopBanner></TopBanner>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <MyWork></MyWork>
            <Contact></Contact>
        </div>
    );
};

export default Home;