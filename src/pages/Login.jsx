import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const [showPass, setShowPass] = useState(false);
    return (
        <div className='min-h-screen bg-gray-100'>            
            <div className='flex justify-center items-center py-20 px-4'>
                <div className='bg-white rounded-lg shadow-md p-12 w-full max-w-2xl'>
                    {/* Title */}
                    <h2 className='text-3xl font-semibold text-gray-800 text-center mb-12'>
                        Login your account
                    </h2>

                    {/* Login Form */}
                    <form className='space-y-6'>
                        {/* Email Address */}
                        <div>
                            <label 
                                htmlFor="email" 
                                className='block text-gray-800 font-semibold mb-3'
                            >
                                Email address
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
                        <div className='relative' >
                            <label 
                                htmlFor="password" 
                                className='block text-gray-800 font-semibold mb-3'
                            >
                                Password
                            </label>
                            <input 
                                type={
                                    showPass ? "text" : "password"
                                } 
                                id="password"
                                name="password"
                                placeholder='Enter your password'
                                className='w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 placeholder-gray-400'
                                required
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPass(!showPass)} 
                                className='absolute right-4 top-13 text-gray-600 hover:text-gray-800'
                            >
                                {
                                    showPass ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>
                        </div>

                        {/* Login Button */}
                        <button 
                            type="submit"
                            className='w-full bg-gray-800 text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition duration-200 mt-8'
                        >
                            Login
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className='text-center text-gray-600 mt-6'>
                        Don't Have An Account? {' '}
                        <Link 
                            to="/auth/register" 
                            className='text-red-500 font-semibold hover:underline'
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;