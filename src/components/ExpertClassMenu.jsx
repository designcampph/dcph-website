import React,{useState} from 'react'
import ExpertClassBanner from '../components/ExpertClassBanner'
import {Link} from 'react-router-dom'
import Ads from '../components/Ads'
import LogoCourse from '../assets/logocourse.png'
import PosterCourse from '../assets/postercourse.png'
import ComingSoon from '../assets/comingsoon.png'

const ExpertClassMenu = () => {

    let status = 0

  return (
    <div className='p-4 bg-black w-screen h-full'>
        <div className='ml-[28%] sm:ml-[5%] md:ml-[10%] lg:ml-[10%]'><Ads number={2}/></div>
        <div className='flex ml-[15%] sm:ml-[2%] md:ml-[8%] lg:ml-[10%] mr-[5%] mt-4'>
            <div className='w-12 h-12 bg-lime-300 rounded-full text-center p-1 m-4 hover:bg-orange-400 hover:text-black'><Link to='/dashboard'><button className='text-4xl'>🡠</button></Link></div>
            <div className='w-[80%] h-62'>
                <h1 className='text-6xl font-bold text-orange-400'>Expert Class</h1>
                <p className='mt-12 text-white text-xl sm:text-md md:text-lg'>Learn more from selected Experts on their Respective Fields. Affordable Courses that will help you Launch your Dream Career. <br /><br /><span className='border-b-2 border-yellow-500 hover:text-yellow-500'>Join an Expert Class now! &rarr;</span></p>
            </div>
            <div className='w-[40%] h-62 bg-blue-400 sm:hidden md:hidden'> 
                <img></img>
            </div>
        </div>
        <div className='text-center ml-[5%] mr-[5%] mt-12'>
            <h1 className='text-3xl font-bold text-orange-400'>Classes Available</h1>
            { (status===0) ?
            <div>
            <img src={ComingSoon} className='w-[50%] ml-[25%] mt-4'></img>
            </div>
            :
            <div>
            <ExpertClassBanner price={199} image={PosterCourse} title={"Creating Poster and other Business Material"} link={'https://forms.gle/d7ra7JGM2HybDrNE8'} expert={'Sir King Andaya | Graphic Designer'}desc={'Learn how to edit photos, and layout various materials'}/>
            <ExpertClassBanner price={199} image={LogoCourse} title={"Creating Logo for my Business"} link={'https://forms.gle/d7ra7JGM2HybDrNE8'} expert={'Sir King Andaya | Graphic Designer'}desc={'Learn how to create Logo for your Business'}/>
            </div>
            }
        </div>
    </div>
  )
}

export default ExpertClassMenu