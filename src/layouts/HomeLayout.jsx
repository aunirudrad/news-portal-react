import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-[90%] mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-[90%] mx-auto'>
                    <Navbar></Navbar>
                </section>
            </header>
            {/* *:border */}
            <main className='w-[90%] mx-auto mt-20 grid grid-cols-12 gap-10'> 
                <aside className='col-span-2'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-8">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-2'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;