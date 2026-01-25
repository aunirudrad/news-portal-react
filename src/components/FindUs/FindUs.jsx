import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold text-xl text-left mt-9 mb-5'>Find Us On</h2>
            
            <div className="border border-base-300 rounded-lg overflow-hidden">
                {/* Facebook */}
                <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 border-b border-base-300 bg-white hover:bg-gray-50 transition"
                >
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                        <FaFacebook className="text-blue-600 text-xl" />
                    </div>
                    <span className="text-gray-700 font-medium">Facebook</span>
                </a>

                {/* Twitter */}
                <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 border-b border-base-300 bg-white hover:bg-gray-50 transition"
                >
                    <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center">
                        <FaTwitter className="text-sky-500 text-xl" />
                    </div>
                    <span className="text-gray-700 font-medium">Twitter</span>
                </a>

                {/* Instagram */}
                <a 
                    href="#" 
                    className="flex items-center gap-3 p-4 bg-white hover:bg-gray-50 transition"
                >
                    <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
                        <FaInstagram className="text-pink-600 text-xl" />
                    </div>
                    <span className="text-gray-700 font-medium">Twitter</span>
                </a>
            </div>
        </div>
    );
};

export default FindUs;