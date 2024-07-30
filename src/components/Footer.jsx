import React from 'react'
import { Link } from 'react-router-dom';
import Ads from './adsterra'

export const Footer = () => {
  return (
    <div className='flex w-full h-32 pt-4 bg-blue-700 text-white bottom-0 mt-4'>
       <div className='flex mt-2 ml-32 md:ml-12 sm:ml-8'>
        <ul>
          <li className='hover:border-b-2 hover:border-white'><Link to='/home'>Home</Link></li>
          <li className='hover:border-b-2 hover:border-white'><Link to='/about'>About</Link></li>
          <li className='hover:border-b-2 hover:border-white'><Link to='/corpotrainings'>Corporate Trainings</Link></li>
        </ul>
        </div>
       <div className='ml-[10%] flex grow w-[100%] lg:w-[100%] sm:hidden md:hidden'></div>
       <div className= 'flex mr-2 w-[35%] md:ml-[12%] sm:text-xs sm:pl-[4%] lg:ml-2 lg:text-sm h-8 bg-orange-400 rounded-full pt-1 pl-[6%] md:pl-[8%] lg:pl-[2%] hover:text-blue-700 hover:bg-white'><a className="hover:textwhite hover:underline" href="https://www.facebook.com/designcampph" target="_blank">Join our Community</a></div>
    </div>
  )
};

export default Footer;