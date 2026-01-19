import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-157' src={logo} alt="" />
                <h2 className='text-lg leading-7 mt-5 mb-2.5'>Journalism Without Fear or Favour</h2>
            </div>
        </div>
    );
};

export default Header;