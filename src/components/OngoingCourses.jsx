import React,{useState,useEffect} from 'react'
import { useUser } from '@clerk/clerk-react';
import supabase from '../../supabase';
import { Link } from 'react-router-dom';
import OngoingBar from './OngoingBar';


const DoneCourses = () => {

      const {user} = useUser();
      let userName = user?.firstName + " " + user?.lastName

      const [courses,setCourses] = useState("")


      useEffect(() => {
        const fetchData = async () => {
            const {data} = await supabase.from("Courses").select().eq("user",userName).lte("percent", 80)
            setCourses(data)
        }
        fetchData()
      }, []);

    return (
        <div>
            <div className='w-full overflow:hidden pb-4 pl-4 bg-white'>
                <h1 className='text-3xl font-bold p-4 mb-4'>Ongoing Courses</h1>
                    {courses && (
                    <div>
                        {courses.map((course,index) =>(
                        <div  key={index} className='flex w-[95%] mb-4 p-4 ml-2 bg-white drop-shadow-xl rounded-lg'>
                            <div className='mr-8 flex'>
                                <p className='text-xl font-bold'>{course.title}</p>
                                <OngoingBar />
                                <button className='bg-green-400 ml-12 p-2 px-6 drop-shadow-xl rounded-full hover:bg-green-200'>
                                    <Link to="/courses">
                                    Continue Course
                                    </Link>
                                    
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    )}
            </div>
        </div>
      )
    }

export default DoneCourses