import React from 'react';
import img1 from '../../../Sabbir portfolio/donation.png'
import img2 from '../../../Sabbir portfolio/eat-healthy.png'
import img3 from '../../../Sabbir portfolio/eid-zakat.png'
import img4 from '../../../Sabbir portfolio/Learning earning.png'

const MyWork = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-5xl font-gloock text-green-600 my-10'>Html-Css Project</h1>
            <div className='grid justify-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5'>
                <img className='bg-blue-100 p-5 rounded-lg' src={img1} alt="" style={{ height: 600, width: 300 }} />
                <img className='bg-blue-100 p-5 rounded-lg' src={img2} alt="" style={{ height: 600, width: 300 }} />
                <img className='bg-blue-100 p-5 rounded-lg' src={img3} alt="" style={{ height: 600, width: 300 }} />
                <img className='bg-blue-100 p-5 rounded-lg' src={img4} alt="" style={{ height: 600, width: 300 }} />
            </div>
        </div>
    );
};

export default MyWork;