import React from 'react';
import hero from '../assets/hero.png';
import { SignedIn,SignInButton, SignedOut } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import Banner from '../assets/Banner.png'

export const Hero = () => {

  return (
    <div className='flex mx-24 mt-4 md:flex-col sm:flex-col'> 
        <div className='flex bg-white h-full w-[60%] md:w-[100%] sm:w-[100%]'>
          <img src={hero}></img>
        </div>
        <div className='h-full w-[40%] md:w-[100%] sm:w-[100%] mb-10'>
            <h1 className='text-7xl mt-[20%] md:mt-[10%] sm:mt-[10%] font-sans font-bold text-blue-700 lg:text-5xl md:text-3xl sm:text-2xl'>Start Learning Today!</h1>
            <p className='text-3xl mt-[5%] font-light text-blue-600 lg:text-2xl md:text-xl sm:text-lg'>Enroll on <span className='font-bold text-orange-400'>DESIGN CAMP PH's</span> Free Courses today and Earn your Certificate</p>
            <SignedOut>
              <SignInButton forceRedirectUrl={'/dashboard'}>
                <button className='ml-[2%] mt-[5%] w-64 h-12 rounded-full font-bold text-zinc-900 bg-orange-400 drop-shadow-lg hover:bg-blue-400'>Sign in now!</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
                <button className='ml-[2%] mt-[5%] w-64 h-12 rounded-full font-bold text-zinc-900 bg-orange-400 drop-shadow-lg hover:bg-blue-400'><Link to='/dashboard'>View Dashboard</Link></button>
            </SignedIn>
            <div className='mt-12 sm:mt-4 lg:mt-8 object-scale-down ml-0'>
              <img src={Banner}></img>
            </div>
        </div>

    </div>
  )
};

export default Hero;
