import React, {useState} from 'react'
import Down from '../assets/down.svg'
import Close from '../assets/close.svg'
import ReactPlayer from 'react-player/youtube'

const VideoPlayer = (props) =>{

    const [hide,setHide] = useState(false);

    const hideElement = () => {
        setHide(!hide);
    }

  return (
    <div>
      <div className='flex w-[85%] pt-2 mr-32 ml-32 mb-4 h-12 pl-8 pb-12 bg-gray-200 border-gray-400 drop-shadow-lg lg:ml-24 md:ml-16 sm:ml-4'>
          <h1 className='flex pt-2 w-[80%] md:w-[80%] sm:w-[80%]'>{props.title}</h1>
          <div className='flex w-[60%] bg-red-200 md:hidden sm:hidden'></div>
          <div className='flex w-[10%] h-6 mt-2' onClick={hideElement}>
              {!hide ? <img src={Close} /> : <img src={Down}/>}
          </div>
      </div>
      <div className={!hide ? 'visible w-[85%] mr-32 ml-32 mb-4 p-8 mt-0 bg-gray-200 border-gray-400 lg:ml-24 md:ml-16 sm:ml-4' : 'hidden'} >
          
      </div>
    </div>
  )
}

export default VideoPlayer;