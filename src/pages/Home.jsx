import React,{useState} from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navlogin from '../components/NavLogin'


const Home = () => {


  return (
    <div>
    <Navlogin />
    <Hero />
    <Footer />
    </div>
  )
}

export default Home