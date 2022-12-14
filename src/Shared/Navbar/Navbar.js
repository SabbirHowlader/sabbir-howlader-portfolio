import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Sabbir portfolio/logo.jpg'

const Navbar = () => {

    const MenuItem =
        <React.Fragment>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Blog</Link></li>
        </React.Fragment>

    return (
        <div className="navbar bg-base-300 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {MenuItem}
                    </ul>
                </div>
                <div className='flex items-center gap- ml-4'>
                    <img src={logo} alt="" className='rounded-full' style={{ height: 50, width: 50 }} />
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Sabbir Howlader</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {MenuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;