import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftAside = () => {
    return (
        <div className=''>
            <Suspense fallback= {
                <div className='flex items-center justify-center'>
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            }>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;