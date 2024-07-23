import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Stream from '../components/Stream'
import { SignedIn,SignedOut } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

const StreamPage = () => {
  return (
    <div>
      <SignedIn>
        <Navigation />
        <Stream />
        <Footer />
      </SignedIn>
      <SignedOut>
      <Login/>
      </SignedOut>
    </div>
  )
}

export default StreamPage