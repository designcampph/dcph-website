import React from 'react'
import { Link } from 'react-router-dom'


const ExpertClassBanner = (props) => {
  return (
    <div className='bg-black ml-[20%] mr-[5%] h-full w-[70%] mt-4 border-4 border-lime-300 rounded-lg'>
        <div className='flex'>
            <div className='p-4 text-left w-full'>
                <h1 className='text-4xl font-bold text-lime-300 '>{props.title}</h1> 
                <p className='text-lg text-cyan-400 mt-4 font-bold'>{props.desc}</p>
                <p className='text-sm text-white mt-4 font-thin'>Expert: {props.expert}</p>
                <button className='bg-orange-500 w-[60%] mt-4 px-4 py-2 rounded-full hover:bg-white hover:text-black'><a href={props.link}>Join Class for only P{props.price}</a></button>
            </div>
            <div className='w-[50%]' >
                <img className='w-full h-full mt-0' src={props.image}></img>
            </div> 

        </div>
    </div>
  )
}

export default ExpertClassBanner