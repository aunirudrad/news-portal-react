import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen py-4'>
            <header className='w-[90%] mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-[90%] mx-auto py-4'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;