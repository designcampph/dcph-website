import React, { useEffect } from 'react'
import {
  LivestreamPlayer,
  StreamVideo,
  StreamVideoClient,
  StreamTheme

} from "@stream-io/video-react-sdk";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import NocourseImg from '../assets/nocourse.png'
import ChatBox from './ChatBox';
import data from '../Data/stream.json'

const StreamExpert = () => {

    const apiKey = data[1].api;
    const token = data[1].token
    const callId = data[1].callId
    
    const client = new StreamVideoClient({ apiKey, token});
    const live = data[1].status

  return (
    <div>
      { (live===0) ?
      <div className='ml-[25%] w-[50%] h-[50%] mt-8 bg-white'>
        <img src={NocourseImg}></img>
      </div>
      :
      <div className='w-[100%] mt-4 h-full bg-white'>
        <StreamVideo client={client}>
          <StreamTheme as="main" className='p-12 w-full h-screen drop-shadow-lg rounded-lg'>
            <LivestreamPlayer callType="livestream" callId={callId} />
          </StreamTheme>
        </StreamVideo>
        <ChatBox />
      </div>
      }
    </div>
  )
}

export default StreamExpert