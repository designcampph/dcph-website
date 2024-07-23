import React from 'react'
import VideoCourse from '../components/VideoCourse'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'
import { SignedIn,SignedOut } from '@clerk/clerk-react'
import Login from '../components/Login'
import QuizCourse from '../components/QuizCourse'

const CourseGDB = () => {
  return (
    <div>
        <SignedIn>
        <Navigation />
        <VideoCourse number={0} title={'Elements of Design'}/>
        <Footer />
      </SignedIn>
      <SignedOut>
        <Login/>
      </SignedOut>
    </div>
  )
}

export default CourseGDB;