import React,{useEffect, useState} from 'react'
import Data from '../Data/course.json'
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import supabase from '../../supabase';
import ReactPlayer from 'react-player';


const VideoCourse = (props) => {

let n = props.number

const {user} = useUser()

let userName = user.firstName + " " + user.lastName

let userId = user.id + "CRSE" + props.number

let userCourse = props.title

const [counter,setCounter] = useState("1");
const [completecounter,setcompleteCounter] = useState("1.5");

const count2 = async () => {
  setCounter("2");

  const { data, error } = await supabase
  .from('Courses')
  .insert([
    { id: userId, user: userName , title: userCourse, percent: 20},
  ])
  .select()

}

const count3 = async () => {
  setCounter("3");

  
const { data, error } = await supabase
.from('Courses')
.update({percent: 40})
.eq('id', userId)
.select()
        
}

const count4 = async () => {
  setCounter("4");

  const { data, error } = await supabase
  .from('Courses')
  .update({percent: 60})
  .eq('id', userId)
  .select()
  
}

const count5 = async () => {
  setCounter("5");

  const { data, error } = await supabase
  .from('Courses')
  .update({percent: 80})
  .eq('id', userId)
  .select()
}


const backcount1 = () => {
  setCounter("1");
}

const backcount2 = () => {
  setCounter("2");
}

const backcount3 = () => {
  setCounter("3");
}

const backcount4 = () => {
  setCounter("4");
}

const completeCount = async () => {

  const { data, error } = await supabase
  .from('Courses')
  .update({percent: 90})
  .eq('id', userId)
  .select()
}


return (
      <div>
        <div className='w-[100%] p-8 ml-32 mr-32 mt-8 lg:ml-24 md:ml-16 sm:ml-2'>
          <h1 className='text-5xl font-bold ml-18 sm:ml-2 md:ml-4'>{props.title}</h1>
          <div className='ml-18 mt-8 pr-12 mb-2 lg:ml-8 md:ml-8 sm:ml-4 lg:flex xl:flex 2xl:flex'>
            <p className='w-[80%] text-lg sm:w-[100%]'>{Data[n].Description}</p>
          </div>
        </div>
        <div>

          <p className='text-red-500 ml-[30%] text-xs sm:ml-[5%] md:ml-[5%] lg:ml-[15%]'>Note: Wait for each video to finish playing then a Next button will appear to watch the next lesson</p>
          {(counter==="1") ? <ReactPlayer className='ml-[28%] sm:ml-[5%] md:ml-[5%] lg:ml-[15%] w-[80%] mb-4' url={Data[n].Video1} onEnded={()=>{setcompleteCounter("1.5")}}/> : null}
          {(completecounter==="1.5") ? <button onClick={count2} className='w-[50%] ml-[25%] px-8 p-2 h-12 text-black-700 bg-green-400 rounded-full sm:ml-[15%] sm:w-[60%] my-4 hover:bg-green-200'> ✅Done</button> : <button className='hidden'>Done</button>}

          
          {(counter==="2") ? <button onClick={backcount1} className='w-[50%] ml-[25%] px-8 p-2 h-12 text-black-700 bg-gray-400 rounded-full sm:ml-[15%] sm:w-[60%] my-4 hover:bg-orange-400'>⬅️Back</button> : <button className='hidden'></button>}
          {(counter==="2") ? <ReactPlayer className='ml-[28%] sm:ml-[5%] md:ml-[5%] lg:ml-[15%] w-[80%] mb-4' url={Data[n].Video2} onEnded={()=>{setcompleteCounter("2.5")}}/> : null}

          {(completecounter==="2.5") ? <button onClick={count3} className='w-[50%] ml-[25%] px-8 p-2 h-12 text-black-700 bg-green-400 rounded-full sm:ml-[15%] sm:w-[60%] my-4 hover:bg-green-200'> ✅Done</button> : <button className='hidden'>Done</button>}
          
         
          {(counter==="3") ? <button onClick={backcount2} className='w-[50%] ml-[25%] px-8 p-2 h-12 text-black-700 bg-gray-400 rounded-full sm:ml-[15%] sm:w-[60%] my-4 hover:bg-orange-400'>⬅️Back</button> : <button className='hidden'></button>}

          {(counter==="3") ? <ReactPlayer className='ml-[28%] sm:ml-[5%] md:ml-[5%] lg:ml-[15%] w-[80%] mb-4' url={Data[n].Video3} onEnded={()=>{setcompleteCounter("3.5")}}/> : null}

          {(completecounter==="3.5") ? <button onClick={count4} className='w-[50%] ml-[25%] px-8 p-2 h-12 text-black-700 bg-green-400 rounded-full sm:ml-[15%] sm:w-[60%] my-4 hover:bg-green-200'>✅Done</button> : <button className='hidden'>Done</button>}

         
          {(counter==="4") ? <button onClick={backcount3} className='w-[50%] ml-[25%] px-8 p-2 h-12 text-black-700 bg-gray-400 rounded-full sm:ml-[15%] sm:w-[60%] my-4 hover:bg-orange-400'>⬅️Back</button> : <button className='hidden'></button>}

          {(counter==="4") ? <ReactPlayer className='ml-[28%] sm:ml-[5%] md:ml-[5%] lg:ml-[15%] w-[80%] mb-4' url={Data[n].Video4} onEnded={()=>{setcompleteCounter("4.5")}}/> : null}

          {(completecounter==="4.5") ? <button onClick={count5} className='w-[50%] ml-[25%] px-8 p-2 h-12 text-black-700 bg-green-400 rounded-full sm:ml-[15%] sm:w-[60%] my-4 hover:bg-green-200'>✅Done</button> : <button className='hidden'>Done</button>}
          
          
          {(counter==="5") ? <button onClick={backcount4} className='w-[50%] ml-[25%] px-8 pb-2 p-2 h-12 text-black-700 bg-gray-400 rounded-full sm:ml-[15%] sm:w-[60%] my-4 hover:bg-orange-400'>⬅️Back</button> : <button className='hidden'></button>}

          {(counter==="5") ? <ReactPlayer className='ml-[28%] sm:ml-[5%] md:ml-[5%] lg:ml-[15%] w-[80%] mb-4' url={Data[n].Video5} onEnded={()=>{setcompleteCounter("5.5")}}/> : null}

          {(completecounter==="5.5") ? <button onClick={completeCount} className='w-[50%] ml-[25%] px-8 p-2 h-12 text-black-700 bg-green-400 rounded-full sm:ml-[15%] sm:w-[60%] my-4 hover:bg-green-200'><Link to='/dashboard'>✅Complete Course</Link></button> : <button className='hidden'>Done</button>}

        </div>

      </div>
)

}
export default VideoCourse;
