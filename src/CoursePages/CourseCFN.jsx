import React from 'react'
import VideoCourse from '../components/VideoCourse'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { SignedIn,SignedOut } from '@clerk/clerk-react'
import Login from '../components/Login'

const CourseCFN = () => {
  return (
    <div>
        <SignedIn>
        <Navigation />
        <VideoCourse number={1} title={'Elements of Design'}/>
        <Footer />
      </SignedIn>
      <SignedOut>
        <Login/>
      </SignedOut>
    </div>
  )
}

export default CourseCFN;