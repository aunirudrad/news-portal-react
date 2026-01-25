import React from 'react';
import swimming from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playground from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-gray-100 p-4 rounded-lg mt-7'>
            <h2 className='font-semibold text-xl text-left mb-5'>Q-Zone</h2>
            
            <div className='space-y-5'>
                {/* Swimming */}

                    <img 
                        src={swimming} 
                        alt="Swimming" 
                        className='w-full h-auto'
                    />


                {/* Class */}

                    <img 
                        src={classImg} 
                        alt="Class" 
                        className='w-full h-auto'
                    />

 

                {/* Play Ground */}

                    <img 
                        src={playground} 
                        alt="Play Ground" 
                        className='w-full h-auto'
                    />
            </div>
        </div>
    );
};

export default QZone;