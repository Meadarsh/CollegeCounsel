import React from 'react'
import LandingPage from './HomeComponent/landingPage'
import SecondPage from './HomeComponent/secondPage'
import WhyChooseus from './HomeComponent/whyChooseus'
import ContactUs from './HomeComponent/contactUs'
import CollegeBoard from './HomeComponent/CollegeBoard'
import Footer from '../../Components/Footer'
import LandingCrausel from './HomeComponent/landingCrausel'
import Applyside from '../../Components/Applyside'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Link to='apply'><Applyside/></Link>
    <LandingCrausel/>
    <SecondPage/>
    <CollegeBoard/>
    <WhyChooseus/>
    {/* <ContactUs/> */}
    <Footer/>
    </>
  )
}

export default Home