import React from 'react';
import img1 from '../../../Assets/cover-img/Doctor portal.png'
import img2 from '../../../Assets/cover-img/coffee cafe.png'
import img3 from '../../../Assets/cover-img/car service.png'
import img4 from '../../../Assets/cover-img/Ezze Technology Ltd.png'
import img5 from '../../../Assets/cover-img/Fitness center.png'
import img6 from '../../../Assets/cover-img/Bike Lagbe.png'
import img7 from '../../../Assets/cover-img/News portal.png'
import img8 from '../../../Assets/cover-img/Food house.png'
import img9 from '../../../Assets/cover-img/Web developer School.png'
import { Link } from 'react-router-dom';


const cardData = [
    {
        id: 1,
        img: img1,
        title: 'Doctor Portal Full-Stack Website',
        details: 'User can add appointment, select date and pay money for their tritment. Login and Register option is avilable.',
        liveLink: 'https://doctor-portal-4501e.web.app/',
        githubClientLink: 'https://github.com/SabbirHowlader/doctor-portal-client',
        githubServerLink: 'https://github.com/SabbirHowlader/doctor-portal-server',
    },
    {
        id: 2,
        img: img2,
        title: 'Coffee Cafe Front-End Website',
        details: 'People can see all menu and special items.',
        liveLink: 'https://coffee-cafe-01.netlify.app/',
        githubClientLink: 'https://github.com/SabbirHowlader/coffee-cafe',
        githubServerLink: '',
    },
    {
        id: 3,
        img: img3,
        title: 'Car Service Full-Stack Website',
        details: 'People buy their needed car service. Login and Register firebase Authentication is avilable.',
        liveLink: 'https://car-genius-d1daf.web.app/',
        githubClientLink: 'https://github.com/SabbirHowlader/genius-car-client',
        githubServerLink: 'https://github.com/SabbirHowlader/genius-car-server',
    },
    {
        id: 4,
        img: img4,
        title: 'Ezze Technology Front-End Website',
        details: 'People can see their service.',
        liveLink: 'https://ezze-technology-limited.netlify.app/',
        githubClientLink: 'https://github.com/SabbirHowlader/ezze-technology',
        githubServerLink: '',
    },
    {
        id: 5,
        img: img5,
        title: 'Fitness Center Front-End Website',
        details: 'People can see their service.',
        liveLink: 'https://fitness-center-733a4.web.app/',
        githubClientLink: 'https://github.com/SabbirHowlader/fitness-center-client',
        githubServerLink: '',
    },
    {
        id: 6,
        img: img6,
        title: 'Bike Lagbe Full-Stack Website',
        details: 'User can buy their favourite bike. Login and Register option is avilable.',
        liveLink: 'https://bike-lagbe.web.app/product',
        githubClientLink: 'https://github.com/SabbirHowlader/bike-lagbe-client',
        githubServerLink: 'https://github.com/SabbirHowlader/bike-lagbe-server',
    },
    {
        id: 7,
        img: img7,
        title: 'News Portal Full-Stack Website',
        details: 'User can see update news. Login and Register option is avilable.',
        liveLink: 'https://dragon-news-client-68cbe.web.app/',
        githubClientLink: 'https://github.com/SabbirHowlader/dragon-news-client',
        githubServerLink: 'https://github.com/SabbirHowlader/dragon-news-server',
    },
    {
        id: 8,
        img: img8,
        title: 'Food House Full-Stack Website',
        details: 'User can buy food. Login and Register option is avilable.',
        liveLink: 'https://food-house-7775e.web.app/',
        githubClientLink: 'https://github.com/SabbirHowlader/food-house-cleint',
        githubServerLink: 'https://github.com/SabbirHowlader/food-house-server',
    },
    {
        id: 9,
        img: img9,
        title: 'Web Developer School Full-Stack Website',
        details: 'User can buy admit their favourite subject. Login and Register option is avilable.',
        liveLink: 'https://web-developer-school.web.app/course',
        githubClientLink: 'https://github.com/SabbirHowlader/web-developer-school-client',
        githubServerLink: 'https://github.com/SabbirHowlader/web-developer-school-server',
    }
]

const Project = () => {
    return (
        <div className='my-10'>
            <h1 className='text-5xl text-center font-gloock text-green-600 my-10'>Project</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-10'>
                {
                    cardData.map(item => (
                        <div key={item.id} class="card w-full bg-base-200 shadow-xl mx-auto">
                            <div class="card-body">
                                <figure><img className='h-96 w-full mx-auto mb-4' src={item.img} alt="img" /></figure>
                                <h2 className='text-2xl font-gloock mb-4 '>{item.title}</h2>
                                <p className='mb-4 font-serif'>{item.details}</p>
                                <div class="card-actions justify-center gap-5">
                                    <div className='border rounded-lg btn-success hover:bg-green-400 p-1 w-36 text-center'><a href={item.liveLink}>Live Link</a></div>
                                    <div className='flex gap-5 px-10'>
                                        <div><a href={item.githubClientLink}><button className='border rounded-lg btn-outline btn-success p-1 w-24 lg:w-36 text-center mx-auto'>GitHub Client Link</button></a></div>
                                        <div className='border rounded-lg btn-outline  btn-success p-1 w-24 lg:w-36 text-center mx-auto'><a href={item.githubServerLink}>GitHub Server Link</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Project;