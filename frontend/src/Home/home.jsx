import React from 'react'
import LandingPage from './HomeComponent/landingPage'
import SecondPage from './HomeComponent/secondPage'
import WhyChooseus from './HomeComponent/whyChooseus'
import ContactUs from './HomeComponent/contactUs'
import CollegeBoard from './HomeComponent/CollegeBoard'

const Home = () => {
  return (
    <>
    <LandingPage/>
    <SecondPage/>
    <CollegeBoard/>
    <WhyChooseus/>
    <ContactUs/>
    </>
  )
}

export default Home