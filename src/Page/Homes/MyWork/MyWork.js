import React from 'react';
import img1 from '../../../Sabbir portfolio/donation.png'
import img2 from '../../../Sabbir portfolio/eat-healthy.png'
import img3 from '../../../Sabbir portfolio/eid-zakat.png'
import img4 from '../../../Sabbir portfolio/Learning earning.png'

const MyWork = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold text-green-600'>My Project</h2>
            <div className='flex justify-center my-10'>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5'>
                    <img src={img1} alt="" style={{ height: 600, width: 300 }} />
                    <img src={img2} alt="" style={{ height: 600, width: 300 }} />
                    <img src={img3} alt="" style={{ height: 600, width: 300 }} />
                    <img src={img4} alt="" style={{ height: 600, width: 300 }} />
                </div>
            </div>
        </div>
    );
};

export default MyWork;