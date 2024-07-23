import React,{useState} from 'react'
import ExpertClassHeader from '../components/ExpertClassHeader'
import StreamExpert from '../components/StreamExpert'
import ED from '../Data/ExpertClass.json'

const ExpertDDC = () => {

  const [pw, setPw] = useState("")
  const [wrong,setWrong] = useState(false)
  const [status, setStatus] = useState(false)

  const SubmitBtn = () => {
    console.log(pw)
    console.log(ED[3].Password)

    if (pw == ED[3].Password){
      setStatus(true)
      setWrong(false)
    } else {
      setStatus(false)
      setWrong(true)
    }

  }


  return (
    <div className='bg-black w-screen h-screen'>
      { wrong===true ? <div className='w-full h-12 bg-violet-500 text-white text-xl text-center'><h1>Wrong Password</h1><h3 className='text-sm text-black'>Please Try Again!</h3></div> : null}
      {status===false ? <div className='h-[25%]'></div> : null}
      { status===false ? <div className='mx-[10%] p-2 w-[80%] text-center border-violet-500 border-2'>
        <h1 className='text-6xl text-violet-500 m-2'>⚠️PASSWORD⚠️</h1>
        <p className='text-xl text-white mt-8'>Please put the password sent to you via Email</p>
        <input type='password' value={pw} className='w-[80%] h-16 p-4 border-2 text-3xl mt-4 border-violet-500 bg-white' placeholder='Type the Password here...' onChange={e=> setPw(e.target.value)}></input><br/>
        <button onClick={SubmitBtn} className='p-2 mt-4 mb-2 rounded-lg bg-orange-400 hover:bg-violet-500'>Submit Password</button>
      </div> : null}

      { status===true ?
      <div className='p-12 mt-2 w-full bg-black'>
        <ExpertClassHeader number={3}/>
        <StreamExpert />
      </div> : null}

    </div>

  )
}

export default ExpertDDC