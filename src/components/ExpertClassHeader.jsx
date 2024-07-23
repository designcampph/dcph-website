import React from 'react'
import { Link } from 'react-router-dom'
import ED from "../Data/ExpertClass.json"

const ExpertClassHeader = (props) => {
  let n = props.number

  return (
    <div className='w-full text-center text-white'>
        <div className='w-full text-center'>
            <h2 className='text-2xl'>Expert Class</h2>
            <h1 className='text-5xl font-bold text-orange-400'>{ED[n].title}</h1>
            <h3 className='text-lg'>Expert: {ED[n].Expert}</h3>
            <img src={ED[n].Image} className=' ml-[35%] w-[30%] h-[30%] mb-4'></img>
            <div className='border-orange-400 border-2 w-[70%] ml-[15%]' >
            <p className='w-[80%] ml-[10%] text-lg mt-4'>{ED[n].Description}</p>
            <ul className='text-lg mt-4'><span className='font-bold'>Downloadables </span> 
                <li className='bg-lime-400 ml-[25%] w-[50%] py-2 px-2 my-2 rounded-full hover:bg-orange-400 hover:text-white'><Link to={ED[n].Link1} target="_Blank">{ED[n].App1}</Link></li>
                <li className=' bg-lime-400 ml-[25%] w-[50%] py-2 px-2 my-2 rounded-full hover:bg-orange-400 hover:text-white'><Link to={ED[n].Link2} target="_Blank">{ED[n].App2}</Link></li>
                <li className=' bg-lime-400 ml-[25%] w-[50%] py-2 px-2 my-2 rounded-full hover:bg-orange-400 hover:text-white'><Link to={ED[n].Link3} target="_Blank">{ED[n].App3}</Link></li>
            </ul>
            <p className='bg-cyan-400 ml-[25%] w-[50%] py-2 px-2 my-2 rounded-full hover:bg-orange-400 hover:text-white'><Link to={ED[n].Gdrive} target="_blank"> {ED[n].Gdrive}</Link></p>
            </div>
        </div>
    </div>
  )
}

export default ExpertClassHeader