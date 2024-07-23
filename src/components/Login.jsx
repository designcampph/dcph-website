import React from 'react';
import logo from '../assets/logo.png';
import { SignInButton,SignedOut } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <div className='text-center w-80 h-80 ml-[40%] mt-[10%] drop-shadow-xl bg-white border-gray-500 rounded-lg pt-6 sm:ml-[10%] md:ml-[20%] lg:ml-[30%] sm:mt-[40%] md:mt-[30%] lg:mt-[20%]'>
            <img className='w-32 ml-24 pb-4 mt-[10%]' src={logo}></img>
            <p className='text-xs font-light'>Sign in to view content</p>
            <div className="text-black bg-blue-400 drop-shadow-xl rounded-full w-[80%] h-12 font-bold p-4 pt-3 ml-[10%] mt-[5%] text-center hover:text-blue-700 hover:bg-orange-400 hover:text-underline">
                <SignedOut>
                    <SignInButton forceRedirectUrl={'/dashboard'}/>
                </SignedOut>
            </div>
            <div className="text-orange-500 bg-white drop-shadow-xl rounded-full w-[80%] h-12 font-bold p-4 pt-3 ml-[10%] mt-[5%] text-center hover:text-blue-700 hover:bg-orange-400 hover:text-underline">
                <Link to="/home">Back to Home</Link>
            </div>
        </div>
    </div>
  )
};

export default Login;
