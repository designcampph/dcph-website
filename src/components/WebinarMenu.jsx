import React,{useState} from 'react'
import Youtube from '../Data/youtube.json';
import { Link } from 'react-router-dom';

const WebinarMenu = () => {

  return (
    <div>
        <div className='top-0 w-full h-full pt-4 pl-20 pb-12 bg-white'>
            <div className='ml-16 mr-12 sm:ml-0 md:ml-2'>
                <h1 className='text-7xl text-bold sm:text-4xl md:text-5xl lg:text-6xl'>Free Tutorials</h1>
                <p className='text-lg md:text-md sm:text-sm pt-2'>We offer this courses for you to learn. You can get a chance to have your Certificate after you watched one Episode</p>
                <br />
            </div>
            <div className='grid grid-cols-4 gap-2 ml-20 mr-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:ml-0 md:ml-4 sm:my-4 lg:ml-2'>
                {
                    Youtube.map ( (courseData,index) => {
                        return(
                            <div key={index} className='flex w-[80%] h-[80%] mr-4 mb-8 bg-white border-2 border-gray-300 hover:border-8 hover:border-blue-800 drop-shadow-xl rounded-2xl'>
                                <div  >
                                    <img src={courseData.Image} className='rounded-xl'></img>
                                    <div className='pl-4 pt-2 py-1 bg-white'>
                                        <strong>{courseData.Title}</strong>
                                        <p>{courseData.Date}</p>
                                        <button className='mt-2 h-12 w-48 rounded-xl bg-green-400 hover:bg-blue-800 hover:text-white'>
                                            <Link to={"/wb" + (index + 1)}>Watch for Free</Link>
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

export default WebinarMenu;
