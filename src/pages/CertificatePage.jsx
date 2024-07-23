import React from 'react'
import Certificate from '../components/Certificate'
import { Link } from 'react-router-dom'
import { SignedIn,SignedOut } from '@clerk/clerk-react'
import Login from '../components/Login'



const CertificatePage = () => {
  return (
    <div>
       <SignedIn>
        <Certificate />
      </SignedIn>
      <SignedOut>
       <Login/>
      </SignedOut>
    </div>
  )
}

export default CertificatePage