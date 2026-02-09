import React from 'react';
import Header from '../components/Header/Header';
import RightAside from '../components/homelayout/RightAside';
import { useLoaderData } from 'react-router';
import NewsCardDetails from '../components/NewsCardDetails/NewsCardDetails';

const NewsDetails = () => {
    const news = useLoaderData();

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-6 my-8'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5 text-xl'>Dragon News</h2>
                    <NewsCardDetails news={news}></NewsCardDetails>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;