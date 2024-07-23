import React,{useState,useEffect} from 'react'
import VideoPlayer from '../components/VideoPlayer'
import Data from '../Data/youtube.json'
import { useUser } from '@clerk/clerk-react'
import supabase from '../../supabase'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const VideoWebinar = (props) => {

const[userWebinar,setuserWebinar] = useState("")
const[activatebtn,setactivateBtn] = useState(true)
let n = props.number

const {user} = useUser();

let userName = user.firstName + " " + user.lastName

let userId = user.id + "Web" + props.number
  

useEffect(()=>{
  if (props.number===1){
    setuserWebinar("Canvamazing Episode 1")
  } else if (props.number===2){
    setuserWebinar("Canvamazing Episode 2")
  } else if (props.number===3){
    setuserWebinar("Canvamazing Episode 3")
  } 
},[])

const completeWebinar = async () => {

  const { data, error } = await supabase
  .from('Webinar')
  .insert([
    { id: userId, user: userName , title: userWebinar, percent: 100},
  ])
  .select()

}


return (
      <div>
        <div className='w-[100%] p-8 ml-32 mr-32 mt-8 lg:ml-24 md:ml-16 sm:ml-8'>
          <h1 className='text-5xl font-bold sm:text-2xl md:text-3xl'>{Data[n].Title}</h1>
          <div className='ml-20 mt-8 pr-12 lg:ml-8 md:ml-8 sm:ml-2'>
          <p className='w-[60%] sm:w-[100%] lg:pl-4'>{Data[n].Date}</p>
          <p className='w-[60%] sm:w-[100%] lg:pl-4'>{Data[n].Description}</p>
          </div>
        </div>
        <div>
          <ReactPlayer onEnded={()=>{setactivateBtn(false)}} controls={true} className='ml-[35%] mr-16 lg:ml-32 md:ml-24 sm:ml-12 w-[50%] h-96 lg:h-72 md:h-52 sm:h-32' url={Data[n].URL}/>
        </div>
       
          {!activatebtn ?
          <div>
          <p></p>
          <button onClick={completeWebinar} className='w-[60%] ml-[25%] px-8 p-2 h-12 bg-green-400 rounded-full sm:ml-[15%] md:ml-[20%] lg:ml-[25%] lg:w-[50%] sm:w-[80%] mt-1 mb-4 hover:bg-blue-400'>
            <Link to='/dashboard'>
                Complete Webinar
            </Link>
          </button>
          </div>
          :
          <div>
          <p className='w-[80%] ml-[42%] mt-1 text-sm'>Finish the Video to Activate the Button</p>
          <button className='w-[60%] ml-[25%] px-8 p-2 h-12 bg-gray-400 rounded-full sm:ml-[15%] md:ml-[20%] lg:ml-[25%] lg:w-[50%] sm:w-[80%] mt-1 mb-4'>Complete Tutorial</button>
          </div>
          }
      </div>
)
}

export default VideoWebinar;
