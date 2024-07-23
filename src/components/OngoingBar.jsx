import React from 'react'

const OngoingBar = () => {

return (
    <div className='flex'>
        <div className='flex relative z-0 w-80 bg-gray-400 h-2 mt-3 ml-4'></div> 
        <div className='absolute z-10 w-40 bg-green-400 h-2 mt-3 ml-4'></div>
        <h1 className='text-md text-green-400 ml-2 mt-1'>50%</h1>
    </div>
  )
}

export default OngoingBar