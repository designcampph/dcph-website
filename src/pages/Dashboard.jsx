
import React,{useState} from 'react'
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Dash from "../components/Dash"
import { SignedIn,SignedOut } from '@clerk/clerk-react'
import Login from '../components/Login'
import Modal from '../components/Modal'


const Dashboard = () => {

  const [showModal,setshowModal] = useState(true)
  return (
    <div>
      <SignedIn>
        <Modal open={showModal} close={setshowModal}/>
        {(showModal===true) ? <div className='absolute z-20 backdrop-blur-md w-screen h-[100%]'></div>:null}
        <Navigation />
        <Dash/>
        <Footer />
      </SignedIn>
      <SignedOut>
        <Login/>
      </SignedOut>
    </div>
  )
}

export default Dashboard;