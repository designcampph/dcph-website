import React,{useState} from 'react'
import { SignOutButton, useUser } from "@clerk/clerk-react";
import Messages from '../components/Messages'
import DoneCourses from '../components/DoneCourses';
import OngoingCourses from '../components/OngoingCourses'
import Stream from '../components/Stream'
import DoneWebinar from '../components/DoneWebinar'
import CertCourses from '../components/CertCourses'
import Ads from '../components/Ads'

const Dash = () => {

    const {user} = useUser();

    const [DashNav,setDashNav] = useState("1")

    const assignNav1 = () =>{
        setDashNav("1")
    }

    const assignNav2 = () =>{
        setDashNav("2")
    }

    const assignNav3 = () =>{
        setDashNav("3")
    }

    const assignNav4 = () =>{
        setDashNav("4")
    }

    const assignNav5 = () =>{
        setDashNav("5")
    }

    const assignNav6 = () =>{
        setDashNav("6")
    }



  return (
    <div>
        <div className='w-full h-full p-2'>
            <div className='ml-[28%] sm:ml-2 md:ml-8'><Ads number={1}/></div>
            <div className='p-6 h-24 mx-24 w-[90%] sm:mx-6 md:mx-12 drop-shadow-lg bg-white backdrop-blur-lg'>
                <h1 className='text-xl'> Hello, {user?.firstName}</h1>
                <span className='border-transparent border-b-2 hover:border-red-700 hover:text-red-700 '><SignOutButton>Sign out</SignOutButton></span>
            </div>
            <div className='flex'>
            <div className='flex w-[25%] ml-24 sm:ml-4 md:ml-12 mt-2 drop-shadow-lg bg-white backdrop-blur-lg'>
                <ul className='p-8 sm:p-2 md:p-4 lg:p-6 font-bold text-zinc-800 underline-offset-2'>
                    <li className='mb-8 sm:text-sm md:text-md border-transparent border-b-2 border-orange-400 text-zinc-700 hover:border-blue-700 hover:text-blue-700' onClick={assignNav1}> ✉️ Messages</li>
                    <li className='mb-8 sm:text-sm md:text-md border-transparent border-b-2 border-orange-400 text-zinc-700 hover:border-blue-700 hover:text-blue-700' onClick={assignNav2}> 🖍 Ongoing Courses</li>
                    <li className='mb-8 sm:text-sm md:text-md border-transparent border-b-2 border-orange-400 text-zinc-700 hover:border-blue-700 hover:text-blue-700' onClick={assignNav3}> ✅ Completed Courses</li>
                    <li className='mb-8 sm:text-sm md:text-md  border-transparent border-b-2 border-orange-400 text-zinc-700 hover:border-blue-700 hover:text-blue-700' onClick={assignNav4}> 📜 Certificates</li>
                    <li className='mb-8 sm:text-sm md:text-md  border-transparent border-b-2 border-orange-400 text-zinc-700 hover:border-blue-700 hover:text-blue-700' onClick={assignNav5}> 🎬 Watched Tutorials</li>
                    <li className='mb-8 sm:text-sm md:text-md  border-transparent border-b-2 border-orange-400 text-zinc-700 hover:border-blue-700 hover:text-blue-700' onClick={assignNav6}> 🎥 Livestream</li>
                </ul>
            </div>
            <div className='ml-2 mt-2 w-[64%] h-[50%] bg-white drop-shadow-lg border-gray-400 '>
                    {(DashNav==="1") ? <Messages /> : null}
                    {(DashNav==="2") ? <OngoingCourses /> : null}
                    {(DashNav==="3") ? <DoneCourses /> : null}
                    {(DashNav==="4") ? <CertCourses /> : null}
                    {(DashNav==="5") ? <DoneWebinar /> : null}
                    {(DashNav==="6") ? <Stream /> : null}
            </div>
            </div>




        </div>
    </div>
  )
}

export default Dash