import React,{useState} from 'react'
import Data from '../Data/data.json'
import { Link } from 'react-router-dom'

const CoursesMenu = () => {

  return (
    <div>
        <div className='top-0 w-full h-full pt-4 pl-20 pb-12 bg-white'>
            <div className='ml-16 mr-12 sm:ml-0 md:ml-2'>
                <h1 className='text-7xl text-bold sm:text-4xl md:text-5xl lg:text-6xl'>Free Courses</h1>
                <p className='text-lg md:text-md sm:text-sm pt-2'>We offer this courses for you to learn. You can get a chance to have your Certificate after you are done with our Project</p>
                <br />
            </div>
            <div className='grid grid-cols-4 gap-2 ml-20 mr-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:ml-0 md:ml-4 sm:my-4 lg:ml-2'>
                {
                    Data.map ((courseData,index) => {
                        return(
                            <div key={courseData.id} className='flex w-[100%] h-96 mr-4 mb-8 bg-white border-2 border-gray-300 hover:border-8 hover:border-blue-800 drop-shadow-xl rounded-2xl'>
                                <div>
                                    <img src={courseData.Photo} className='rounded-xl w-[100%] h-[60%]'></img>
                                    <div className='pl-4 pt-2 py-1 bg-white'>
                                        <strong>{courseData.Course}</strong>
                                        <p>{courseData.Duration} | <b className='text-blue-800'>{courseData.Type}</b></p>
                                        <p>{courseData.Level}</p>
                                        <button className='mt-2 h-12 w-48 rounded-full bg-green-400 hover:bg-blue-800 hover:text-white'>
                                            <Link to={"/crs" + courseData.id}>Enroll for FREE!</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CoursesMenu;
