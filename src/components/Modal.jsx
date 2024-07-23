import React from 'react'
import ModalImg from '../assets/Modal1.png'
import { Link } from 'react-router-dom'

const Modal = ({open,close}) => {

  return (
    <div>
        {open ?
        <div className='absolute z-30 w-[40%] h-[30%] ml-[30%] drop-shadow-lg text-center p-4'>
            <button onClick={() => close(false)} className='bg-white p-2 text-sm font-thin hover:border-b-2 hover:border-black mb-4'> x Close</button>
            <Link to="/expert"><img src={ModalImg}></img></Link>
        </div>
        : null
        }
    </div>
  )
}

export default Modal