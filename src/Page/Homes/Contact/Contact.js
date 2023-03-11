import React from 'react';
import { FaPhone, FaRegEnvelope, FaSearchLocation } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='my-10'>
            <h1 className='text-5xl text-center font-gloock text-green-600 my-10'>Contact Info</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 font-serif '>
                <div className='bg-blue-100 p-10 rounded-lg flex justify-items-center gap-3'>
                    <span className='text-2xl hover:text-orange-500'><FaPhone></FaPhone></span>
                    <p><span className='font-gloock' >Phone : </span> 01989321756</p>
                </div>
                <div className='bg-base-300 p-10 rounded-lg flex justify-items-center gap-3'>
                    <span className='text-2xl hover:text-orange-500'><FaRegEnvelope></FaRegEnvelope></span>
                    <p><span className='font-gloock'>Email :</span> mdsabbirhowlader60@gmail.com</p>
                </div>
                <div className='bg-green-100 p-10 rounded-lg flex justify-items-center gap-3'>
                    <span className='text-2xl hover:text-orange-500'><FaSearchLocation></FaSearchLocation></span>
                    <p><span className='font-gloock'>Address : </span> Mohakhali, Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;