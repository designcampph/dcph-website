import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import WebinarMenu from '../components/WebinarMenu'
import { SignedIn,SignedOut } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Ads from '../components/Ads'

const Webinars = () => {
  return (
    <div>
      <SignedIn>
        <Navigation />
        <div className='mx-[28%] sm:mx-[4%] md:mx-[4%] lg:mx-[12%]'><Ads number={0}/></div>
        <WebinarMenu />
        <Footer />
      </SignedIn>
      <SignedOut>
       <Login/>
      </SignedOut>
    </div>
  )
}

export default Webinars