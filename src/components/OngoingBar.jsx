import React,{useState} from 'react'

const OngoingBar = (props) => {

let n = props.number

const [status,setStatus] = useState(n)

return (
    <div className='flex'>
        <div className='flex relative z-0 w-80 bg-gray-400 h-2 mt-3 ml-4 sm:hidden md:hidden'></div> 
        {status===20 ? <div className='absolute z-10 w-20 bg-green-400 h-2 mt-3 ml-4 sm:hidden md:hidden'></div> : null}
        {status===40 ? <div className='absolute z-10 w-40 bg-green-400 h-2 mt-3 ml-4 sm:hidden md:hidden'></div> : null}
        {status===60 ? <div className='absolute z-10 w-60 bg-green-400 h-2 mt-3 ml-4 sm:hidden md:hidden' ></div> : null}
        {status===80 ? <div className='absolute z-10 w-80 bg-green-400 h-2 mt-3 ml-4 sm:hidden md:hidden'></div> : null}
        <h1 className='text-md text-green-400 ml-2 mt-1 sm:hidden md:hidden'>{props.number}%</h1>
    </div>
  )
}

export default OngoingBar