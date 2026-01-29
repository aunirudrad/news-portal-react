import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='min-h-screen bg-gray-100'>
            
            <div className='flex justify-center items-center py-20 px-4'>
                <div className='bg-white rounded-lg shadow-md p-12 w-full max-w-2xl'>
                    {/* Title */}
                    <h2 className='text-3xl font-semibold text-gray-800 text-center mb-12'>
                        Register your account
                    </h2>

                    {/* Registration Form */}
                    <form className='space-y-6'>
                        {/* Your Name */}
                        <div>
                            <label 
                                htmlFor="name" 
                                className='block text-gray-800 font-semibold mb-3'
                            >
                                Your Name
                            </label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                placeholder='Enter your name'
                                className='w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 placeholder-gray-400'
                                required
                            />
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label 
                                htmlFor="photo" 
                                className='block text-gray-800 font-semibold mb-3'
                            >
                                Photo URL
                            </label>
                            <input 
                                type="text" 
                                id="photo"
                                name="photo"
                                placeholder='Enter your photo URL'
                                className='w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 placeholder-gray-400'
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label 
                                htmlFor="email" 
                                className='block text-gray-800 font-semibold mb-3'
                            >
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                placeholder='Enter your email address'
                                className='w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 placeholder-gray-400'
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className='relative'>
                            <label 
                                htmlFor="password" 
                                className='block text-gray-800 font-semibold mb-3'
                            >
                                Password
                            </label>
                            <input 
                                type={showPass ? "text" : "password"} 
                                id="password"
                                name="password"
                                placeholder='Enter your password'
                                className='w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 placeholder-gray-400'
                                required
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPass(!showPass)} 
                                className='absolute right-4 top-12 text-gray-600 hover:text-gray-800'
                            >
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* Terms & Conditions */}
                        <div className='flex items-center gap-2 mt-6'>
                            <input 
                                type="checkbox" 
                                id="terms"
                                name="terms"
                                className='w-4 h-4 accent-gray-800 cursor-pointer'
                                required
                            />
                            <label 
                                htmlFor="terms" 
                                className='text-gray-600 cursor-pointer'
                            >
                                Accept <span className='font-semibold text-gray-800'>Term & Conditions</span>
                            </label>
                        </div>

                        {/* Register Button */}
                        <button 
                            type="submit"
                            className='w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition duration-200 mt-8'
                        >
                            Register
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className='text-center text-gray-600 mt-6'>
                        Already Have An Account? {' '}
                        <Link 
                            to="/login" 
                            className='text-red-500 font-semibold hover:underline'
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;