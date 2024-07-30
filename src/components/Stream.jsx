import React from 'react'
import {
  LivestreamPlayer,
  StreamVideo,
  StreamVideoClient,
  StreamTheme

} from "@stream-io/video-react-sdk";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import streamImg from '../assets/stream.jpg'
import nostreamImg from '../assets/nostream.png'
import ChatBox from './ChatBox';
import data from '../Data/stream.json'
import { useUser } from '@clerk/clerk-react';
import supabase from '../../supabase';

const Stream = () => {

    const apiKey = data[0].api;
    const token = data[0].token
    const callId = data[0].callId
    
    const client = new StreamVideoClient({ apiKey, token });

    const live = 0

    const {user} = useUser();
    const userName = user?.fullName
    let userId = user.id + "Web" + "0726"


    const JoinBtn = async () =>{
      const { data, error } = await supabase
      .from('Webinar')
      .insert([
        { id: userId, user: userName , title: "Learn to Unlearn", percent: 100},
      ])
      .select()

      alert('Thank you for watching our Webinar!, Go to Watched Tutorials for your Certificate')

      }


  return (
    <div>
      {(live===0) ? 
       <div className='ml-[25%] w-[50%] h-[50%] mt-2 bg-white'>
       <img src={nostreamImg}></img>
     </div> : null 
      }

      { (live===1) ?
      <div className='w-[100%] h-full bg-white'>
        <StreamVideo client={client}>
          <StreamTheme as="main" className='p-12 w-screen h-screen drop-shadow-lg rounded-lg'>
            <LivestreamPlayer callType="livestream" callId={callId} />
          </StreamTheme>
        </StreamVideo>
        <ChatBox />
      </div>
      : null}

      { (live===2) ?
      <div className='ml-[25%] w-[50%] h-[50%] mt-2 bg-white'>
        <img src={streamImg}></img>
        <button onClick={JoinBtn} className='w-[100%] my-4 p-4 rounded-full bg-green-400 hover:bg-blue-500'>I have watched the Webinar</button>
      </div> : null }
    </div>
  )
}

export default Stream