import Footer from '@/components/Footer'
import AimComponent from '@/components/Home/AimComponent'
import Carousel from '@/components/Home/Carousel'
import Home from '@/components/Home/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <Home/>
      <Carousel/>
      <AimComponent/>
      <Footer/>
    </>
  )
}

export default page
