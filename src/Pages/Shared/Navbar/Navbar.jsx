import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const navlinks = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'border-b-2 border-[#FF4802] px-4 py-2 ' : 'px-4 py-2 hover:border-[#FF4802] ease-in'}>Home</NavLink>

        <NavLink to='/findwork' className={({ isActive }) => isActive ? 'border-b-2 border-[#FF4802] px-4 py-2 ' : 'px-4 py-2 ease-in hover:border-b-2 hover:border-[#FF4802]'}>Find Work</NavLink>

        <NavLink to='/yourjobs' className={({ isActive }) => isActive ? 'border-b-2 border-[#FF4802] px-4 py-2 ' : 'px-4 py-2 ease-in hover:border-b-2 hover:border-[#FF4802]'}>Your Jobs</NavLink>

        <NavLink to='/blogs' className={({ isActive }) => isActive ? 'border-b-2 border-[#FF4802] px-4 py-2 ' : 'px-4 py-2 ease-in hover:border-b-2 hover:border-[#FF4802]'}>Guides</NavLink>

        <NavLink to='/blogs' className={({ isActive }) => isActive ? 'border-b-2 border-[#FF4802] px-4 py-2 ' : 'px-4 py-2 ease-in hover:border-b-2 hover:border-[#FF4802]'}>Message</NavLink>
    </>

    return (
        <div>
            <div className="navbar md:px-14 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to='/' className='text-3xl font-bold'>
                    Pro<span className='text-[#FF4802]'>Desh</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1 text-base ease-in-out">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/signup'
                    className='px-5 py-2 rounded-full bg-[#FF4802] border-2 border-[#FF4802] text-white font-bold hover:bg-transparent hover:text-[#FF4802]'
                    >
                    Join Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;