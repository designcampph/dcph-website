import React,{useEffect, useState} from 'react'
import supabase from '../../supabase'
import { useUser } from '@clerk/clerk-react';

const ChatBox = () => {


    const {user} = useUser();
    let userName = user?.firstName
    const [chat,setChat] = useState("")
    const [mess,setMess] = useState(" ")

    const handleInputChange = (event) => {
        setMess(event.target.value);
      };

      const fetchData = async () => {
        const {data} = await supabase.from("Chats").select()
        setChat(data)
      }

    useEffect(() => {
      
        fetchData()

      }, []);



    const send = async () => {

        const { data, error } = await supabase
        .from('Chats')
        .insert([
          { user: userName , message: mess},
        ])
        .select()

        setMess('')

        fetchData()
        
    }




  return (
    <div>
        <div>

            <div className='w-full h-52 drop-shadow-lg border-gray-300 border-2 mt-8 p-2 overflow-auto'>
                {chat && (
                    <div>
                    {chat.map((chat,index) =>(
                    <div key={index} className='rounded-lg bg-white m-4 pl-4 p-4'>
                        <p className='font-bold text-md'>{chat.user}</p>
                        <p className='text-lg font-thin'>{chat.message}</p>
                    </div>
                    ))}
                    </div>
                )}
            </div>

            <div className='flex w-full h-full mt-4 rounded-lg drop-shadow-lg border-gray-300 border-2'>
                <input onChange={handleInputChange} value={mess} rows="1" className='w-[80%] h-16 m-2 p-2 border-2 border-gray-400'></input>
                <button onClick={send} className='w-[20%] m-2 bg-black text-white p-1'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default ChatBox