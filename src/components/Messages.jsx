import React,{useState} from 'react'
import MessagesData from '../Data/messages'

const Messages = () => {

    const [showMessage,setshowMessage] = useState(true);

    const show = () =>{
        setshowMessage(!showMessage)
    }

  return (
    <div>
        <div className='grid grid-cols-3 gap-1'>
            <div className='w-[100%] h-24 mt-2 p-2 bg-white border-gray-400 drop-shadow-lg rounded-xl text-blue-700 hover:text-white hover:bg-blue-700'>
                <h3 className='text-lg sm:text-xs md:text-sm lg:text-sm'>FB Followers:</h3>
                <h1 className='text-4xl ml-[50%] sm:ml-[5%] md:ml-[10%] lg:ml-[40%] sm:text-sm md:text-md lg:text-md'>9.2K</h1>
            </div>
            <div className='w-[100%] h-24 mt-2 p-2 bg-white border-gray-400 drop-shadow-lg rounded-xl text-blue-700 hover:text-white hover:bg-red-500 '>
                <h3 className='text-lg sm:text-xs md:text-sm lg:text-sm'>Youtube Subscribers:</h3>
                <h1 className='text-4xl ml-[50%] sm:ml-[5%] md:ml-[10%] lg:ml-[40%] sm:text-sm md:text-md lg:text-md'>780</h1>
            </div>

            <div className='w-[100%] h-24 m-2 p-2 bg-white border-gray-400 drop-shadow-lg rounded-xl text-blue-700 hover:text-black hover:bg-green-400'>
                <h3 className='text-lg sm:text-xs md:text-sm lg:text-sm'>Webinar Attendees:</h3>
                <h1 className='text-4xl ml-[50%] sm:ml-[5%] md:ml-[10%] lg:ml-[40%] sm:text-sm md:text-md lg:text-md'>4.5K</h1>
            </div>
        </div>
        <div className='w-full overflow:hidden pb-4 pl-4 bg-blue-200'>
            <h1 className='text-3xl font-bold p-4'>Messages</h1>
            {MessagesData.map (messageData => {
                return(
                <div key={1}>
                    <div className='flex w-[95%] sm:w-[80%] mb-4 p-4 ml-2 bg-white drop-shadow-xl rounded-lg'>
                        <h1 className='text-3xl'>✉️</h1>
                        <div className='mr-8 flex'>
                            <div>
                            <h1 className='text-xl font-bold text-black'>{messageData.Subject}</h1>
                            <p>{messageData.Preview}</p>
                            <p>{messageData.Date}</p>
                            {!showMessage ? <h1 className='text-red-500'><button onClick={show}>❌Close</button></h1> : <h1 className='text-blue-400'><button onClick={show}>🔽Open</button></h1>}
                            </div>
                        </div>
                    </div>
                    <div className={!showMessage ? 'flex visible w-[95%] py-2 ml-0 mb-4 bg-white drop-shadow-xl' : 'hidden'}>
                        <p className='pl-4'>{messageData.Body}</p>
                    </div>
                </div>
                )
            })
            }
            
        </div>
    </div>
  )
}

export default Messages