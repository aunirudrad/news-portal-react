import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftAside = () => {
    return (
        <div className='text-center'>
            <Suspense fallback= {
                <span className="loading loading-dots loading-lg"></span>
            }>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;