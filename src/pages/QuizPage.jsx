import React from 'react'
import QuizCourse from '../components/QuizCourse'
import { Link } from 'react-router-dom'
import { SignedIn,SignedOut } from '@clerk/clerk-react'
import Login from '../components/Login'

const QuizPage = () => {
  return (
    <div>
    <SignedIn>
        <QuizCourse />
      </SignedIn>
      <SignedOut>
       <Login/>
      </SignedOut>
    </div>
  )
}

export default QuizPage