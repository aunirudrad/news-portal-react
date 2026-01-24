import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-157' src={logo} alt="" />
                <h2 className='text-lg text-accent leading-7 mt-5 mb-2.5'>Journalism Without Fear or Favour</h2>
                <p className='font-medium text-xl leading-7 text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;