import React from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='mb-5 flex items-center justify-between'>
            <div className="left_nav w-5/15"></div>
            <div className="main_nav flex gap-5 text-accent w-5/15 justify-center">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="right_nav flex items-center gap-5 w-5/15 justify-end">
                <img src={userIcon} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;