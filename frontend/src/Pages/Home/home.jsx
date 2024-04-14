import React from 'react'
import LandingPage from './HomeComponent/landingPage'
import SecondPage from './HomeComponent/secondPage'
import WhyChooseus from './HomeComponent/whyChooseus'
import ContactUs from './HomeComponent/contactUs'
import CollegeBoard from './HomeComponent/CollegeBoard'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <>
    <LandingPage/>
    <SecondPage/>
    <CollegeBoard/>
    <WhyChooseus/>
    {/* <ContactUs/> */}
    <Footer/>
    </>
  )
}

export default Home