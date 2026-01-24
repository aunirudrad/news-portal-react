import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='my-3 flex items-center gap-5 p-3 bg-base-200'>

                <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>

                <Marquee className='flex items-center gap-5' pauseOnHover={true}>
                    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis.</p>
                    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam quod soluta, laudantium accusantium facere placeat culpa non sunt reiciendis.</p>
                    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nobis.</p>
                </Marquee>
                

        </div>
    );
};

export default LatestNews;