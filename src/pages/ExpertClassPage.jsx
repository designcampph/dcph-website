import React from 'react'
import { SignedIn,SignedOut } from '@clerk/clerk-react'
import ExpertClassMenu from '../components/ExpertClassMenu'
import Login from '../components/Login'
import Ads from '../components/Ads'

const ExpertClassPage = () => {
  return (
    <div>
    <SignedIn>
        <ExpertClassMenu />
      </SignedIn>
      <SignedOut>
        <Login/>
      </SignedOut>
    </div>
  )
}

export default ExpertClassPage