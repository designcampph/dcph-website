import React from 'react'
import VideoWebinar from '../components/VideoWebinar'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { SignedIn,SignedOut } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

const WebinarSeven = () => {
  return (
    <div>
      <SignedIn>
        <Navigation />
        <VideoWebinar number={7} />
        <Footer />
      </SignedIn>
      <SignedOut>
      <Login/>
      </SignedOut>
    </div>
  )
}

export default WebinarSeven;